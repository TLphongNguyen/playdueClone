function Button({ text }) {
	return (
		<button
			type="submit"
			className="h-[54px] bg-[#f0564a] leading-[50px] text-[19px] text-[#fff] w-[100%] my-[22px] rounded-[6px] hover:bg-[#a50000]"
		>
			{text}
		</button>
	);
}

export default Button;
