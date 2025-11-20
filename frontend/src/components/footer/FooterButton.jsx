import { useNavigate } from "react-router-dom";

export default function FooterButton({label, to}) {
    const navigate = useNavigate();
    return (
        <div className="flex-auto cursor-pointer hover:text-gray-300 hover:underline decoration-solid"
            onClick={() => navigate(to)}>
                {label}
            </div>
    )
}