import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    return(
        <div className="flex bg-[#084887]">
            <div className="flex-auto">Bartering App Logo</div>
            <div className="flex-auto cursor-pointer hover:text-gray-300 hover:underline decoration-solid"
                onClick={() => navigate("/about")}>
                About
            </div>
        </div>
    )
}