'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import Image from 'next/image'
import { Minus, Plus, X, ShoppingBag } from 'lucide-react'
import type { Product } from '@/lib/products'
import { cn } from '@/lib/utils'

type CartItem = Product & { quantity: number }

type CartContextValue = {
  items: CartItem[]
  count: number
  total: number
  isOpen: boolean
  addItem: (product: Product, options?: { openCart?: boolean }) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback(
    (product: Product, options?: { openCart?: boolean }) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.id === product.id)
        if (existing) {
          return prev.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
          )
        }
        return [...prev, { ...product, quantity: 1 }]
      })
      if (options?.openCart) setIsOpen(true)
    },
    [],
  )

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, quantity } : i)),
    )
  }, [])

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, i) => sum + i.quantity, 0)
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
    return {
      items,
      count,
      total,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }
  }, [items, isOpen, addItem, removeItem, updateQuantity])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function CartDrawer() {
  const { items, total, isOpen, closeCart, updateQuantity, removeItem } =
    useCart()
  const [checkoutNotice, setCheckoutNotice] = useState(false)

  return (
    <>
      <div
        aria-hidden={!isOpen}
        onClick={closeCart}
        className={cn(
          'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-500',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        aria-modal="true"
        className={cn(
          'fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-card transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-heading text-xl tracking-wide text-foreground">
            Your Bag
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close bag"
            className="text-muted-foreground transition-colors hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-gold/60" />
            <p className="text-lg text-muted-foreground">
              Your bag is waiting to be filled with presence.
            </p>
          </div>
        ) : (
          <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4 py-5">
                <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-sm bg-background">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-heading text-base tracking-wide text-foreground">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.size}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="text-muted-foreground transition-colors hover:text-gold"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                        className="px-2 py-1 text-muted-foreground transition-colors hover:text-gold"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-8 text-center text-sm text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                        className="px-2 py-1 text-muted-foreground transition-colors hover:text-gold"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="font-heading text-base text-gold">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <footer className="border-t border-border px-6 py-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-base uppercase tracking-luxe text-muted-foreground">
                Subtotal
              </span>
              <span className="font-heading text-2xl text-gold">${total}</span>
            </div>
            <button
              onClick={() => setCheckoutNotice(true)}
              className="w-full bg-primary py-4 text-sm font-semibold uppercase tracking-luxe text-primary-foreground transition-opacity hover:opacity-90"
            >
              Proceed to Checkout
            </button>
            {checkoutNotice && (
              <p
                role="status"
                className="mt-4 border border-gold/30 bg-gold/5 px-4 py-3 text-center text-sm leading-relaxed text-foreground/75"
              >
                Secure online checkout is launching soon. To place an order now,
                contact us at{' '}
                <a
                  href="mailto:manager@tt-enterprises.com"
                  className="text-gold underline-offset-2 hover:underline"
                >
                  manager@tt-enterprises.com
                </a>
                .
              </p>
            )}
          </footer>
        )}
      </aside>
    </>
  )
}
