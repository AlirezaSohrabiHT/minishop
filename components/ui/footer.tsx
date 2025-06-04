import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white text-sm p-4 flex flex-col items-center gap-2">
            <div className="w-full flex flex-wrap justify-around items-center gap-4">
                <span>Conditions of Use</span>
                <span>Privacy Notice</span>
                <span>Consumer Health Data Privacy Disclosure</span>
                <div className="flex items-center gap-2">
                    <p>Your Ads Privacy Choices</p>
                    <Switch id="ads-privacy-toggle" />
                </div>
            </div>
            <p className="text-gray-400 text-xs">
                © 2025, minishop.mework.it, Inc. or its affiliates
            </p>
        </footer>
    )
}
