import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
function DetailPlayer() {
	const { register, handleSubmit, control } = useForm();
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};
	const theme = useTheme();
	const [personName, setPersonName] = useState([]);

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
		);
		console.log(personName);
	};
	function getStyles(name, personName, theme) {
		return {
			fontWeight: personName.includes(name)
				? theme.typography.fontWeightMedium
				: theme.typography.fontWeightRegular,
		};
	}

	const names = [
		'Oliver Hansen',
		'Van Henry',
		'April Tucker',
		'Ralph Hubbard',
		'Omar Alexander',
		'Carlos Abbott',
		'Miriam Wagner',
		'Bradley Wilkerson',
		'Virginia Andrews',
		'Kelly Snyder',
	];

	return (
		<div className="">
			<form action="" className="">
				<h1 className="">Nhập thông tin chi tiết</h1>
				<div className="w-[70%]">
					<div className="mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
							title
						</label>
						<input
							{...register('title')}
							className="h-[36px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							type="text"
						/>
					</div>
					<div className="mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
							Link Facebook
						</label>
						<input
							{...register('linkfacebook')}
							className="h-[36px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							type="text"
						/>
					</div>

					<div className="mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
							Link youtube
						</label>
						<input
							{...register('linkyoutube')}
							className="h-[36px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							type="text"
						/>
					</div>
					<div className="mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
							Link highlight
						</label>
						<input
							{...register('linkhighlight')}
							className="h-[36px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							type="text"
						/>
					</div>

					<div className="mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
							describe
						</label>
						<input
							{...register('describe')}
							className="h-[36px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							type="text"
						/>
					</div>
					<div className="mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
							game
						</label>
						<div className="">
							<FormControl
								className="border-[1px] border-[#e6eaee] border-solid"
								sx={{ width: '100%', height: 36 }}
							>
								<Select
									className="h-[100%]"
									multiple
									displayEmpty
									value={personName}
									onChange={handleChange}
									input={<OutlinedInput />}
									renderValue={(selected) => {
										if (selected.length === 0) {
											return <em>Games</em>;
										}

										return selected.join(', ');
									}}
									MenuProps={MenuProps}
									inputProps={{ 'aria-label': 'Without label' }}
								>
									<MenuItem disabled value="">
										<em>Placeholder</em>
									</MenuItem>
									{names.map((name) => (
										<MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
											{name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default DetailPlayer;
