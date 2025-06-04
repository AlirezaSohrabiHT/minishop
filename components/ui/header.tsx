import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Header() {
  return (
    <header className="flex w-full h-[60px] p-4 bg-black text-white items-center justify-between flex-row-reverse gap-4">

      {/* Cart Section */}
      <div className="flex items-center gap-2">
        <img src="/cart.png" alt="Cart" className="w-6 h-6" />
        <span>Cart</span>
      </div>

      {/* Returns & Orders */}
      <div>
        <p>Returns & Orders</p>
      </div>

      {/* Account & Lists Dropdown */}
      <div className="flex flex-col">
        <span>Hello, sign in</span>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Account & Lists" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Account & Lists</SelectLabel>
              <SelectItem value="account">Account</SelectItem>
              <SelectItem value="order">Order</SelectItem>
              <SelectItem value="recommendation">Recommendation</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Placeholder: Language Selector */}
      <div>{/* Language selector here */}</div>

      {/* Placeholder: Search Bar */}
      <div>{/* Search component here */}</div>

      {/* Delivery Info */}
      <div className="text-right">
        <span>Deliver to</span>
        <p>Germany</p>
      </div>

      {/* Logo */}
      <div>
        <img src="/logo.png" alt="Minishop Logo" className="w-12 h-auto" />
      </div>
    </header>
  );
}
