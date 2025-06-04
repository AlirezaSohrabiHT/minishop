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
    return(
        <header className="flex w-[100vw] p-4 bg-black text-white h-[60px] flex-row-reverse justify-between items-center">
                <div>
                    <img src='/cart.png'/>
                    <span>Cart</span>
                </div>
                <div>
                    <p>Returns & Orders</p>
                </div>
                <div>
                    <span>Hello, sing in</span>
                    <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Account & Lists</SelectLabel>
                        <SelectItem value="account">Account</SelectItem>
                        <SelectItem value="order">Order</SelectItem>
                        <SelectItem value="Recomendation">Recomendation</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                    </Select>
                </div>
                <div>
                    {/* lang select */}
                </div>
                <div>
                    {/* search */}
                </div>
                <div>
                    <span>Deliver to</span>
                    <p>Germany</p>
                </div>
                <div>
                    <img className="w-[48px]" src='/logo.png'/>
                </div>
        </header>
    )
}