export default function FooterButton({label, to}) {
    return (
        <div className="flex-auto cursor-pointer hover:text-gray-300 hover:underline decoration-solid"
            onClick={() => navigate(to)}>
                {label}
            </div>
    )
}