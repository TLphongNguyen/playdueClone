import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LineChart from '~/components/chart';
function HomeAdmin() {
	return (
		<div className="px-16 py-10 w-[100%] h-[100%]">
			<div className="w-[100%] h-[100%] rounded-[10px]">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
					<div className="rounded-sm border border-stroke bg-white px-[30px] py-[24px] shadow-default ">
						<div className="flex h-[46px] w-[46px] justify-center items-center rounded-full bg-[#eff2f7] ">
							<FontAwesomeIcon className="text-[#3C50E0] " icon={faEye} />
						</div>
						<div className="mt-4 flex items-end justify-between">
							<div className="">
								<h4 className="text-[24px] leading-[30px] font-bold text-black ">$3.456K</h4>
								<span className="text-sm font-medium text-[#64748B]">Total views</span>
							</div>
							<span className="flex items-center gap-1 text-sm font-medium  text-[#10b981]">0.43%</span>
						</div>
					</div>
					<div className="rounded-sm border border-stroke bg-white px-[30px] py-[24px] shadow-default ">
						<div className="flex h-[46px] w-[46px] justify-center items-center rounded-full bg-[#eff2f7] ">
							<FontAwesomeIcon className="text-[#3C50E0] " icon={faEye} />
						</div>
						<div className="mt-4 flex items-end justify-between">
							<div className="">
								<h4 className="text-[24px] leading-[30px] font-bold text-black ">$3.456K</h4>
								<span className="text-sm font-medium text-[#64748B]">Total views</span>
							</div>
							<span className="flex items-center gap-1 text-sm font-medium  text-[#10b981]">0.43%</span>
						</div>
					</div>
					<div className="rounded-sm border border-stroke bg-white px-[30px] py-[24px] shadow-default ">
						<div className="flex h-[46px] w-[46px] justify-center items-center rounded-full bg-[#eff2f7] ">
							<FontAwesomeIcon className="text-[#3C50E0] " icon={faEye} />
						</div>
						<div className="mt-4 flex items-end justify-between">
							<div className="">
								<h4 className="text-[24px] leading-[30px] font-bold text-black ">$3.456K</h4>
								<span className="text-sm font-medium text-[#64748B]">Total views</span>
							</div>
							<span className="flex items-center gap-1 text-sm font-medium  text-[#10b981]">0.43%</span>
						</div>
					</div>
					<div className="rounded-sm border border-stroke bg-white px-[30px] py-[24px] shadow-default ">
						<div className="flex h-[46px] w-[46px] justify-center items-center rounded-full bg-[#eff2f7] ">
							<FontAwesomeIcon className="text-[#3C50E0] " icon={faEye} />
						</div>
						<div className="mt-4 flex items-end justify-between">
							<div className="">
								<h4 className="text-[24px] leading-[30px] font-bold text-black ">$3.456K</h4>
								<span className="text-sm font-medium text-[#64748B]">Total views</span>
							</div>
							<span className="flex items-center gap-1 text-sm font-medium  text-[#10b981]">0.43%</span>
						</div>
					</div>
				</div>
				<div className="mt-[50px] ">
					<LineChart />
				</div>
			</div>
		</div>
	);
}

export default HomeAdmin;
