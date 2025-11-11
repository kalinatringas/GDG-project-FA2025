import FooterButton from "./FooterButton";

export default function Footer() {
    return(
        <div className="flex bg-[#084887]">
            <div className="flex-auto">Bartering App Logo</div>
            <FooterButton label="About" to="/about"/>
        </div>
    )
}