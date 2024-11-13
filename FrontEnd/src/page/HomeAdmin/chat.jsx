import { faMagnifyingGlass, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ChatRoomAdmin() {
	return (
		<div className="px-16 py-10 w-[100%] h-[100%]">
			<div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<h2 className="text-[26px] leading-[30px] font-bold text-black ">Messages</h2>
				<div className="flex items-center gap-2"></div>
			</div>
			<div className="h-[calc(100vh-186px)] overflow-hidden sm:h-[calc(100vh-174px)]">
				<div className="h-full rounded-sm border border-[#e2e8f0] bg-white shadow-default xl:flex">
					<div className="hidden h-full flex-col xl:flex xl:w-1/4">
						<div className="sticky border-b-[1px] border-solid border-[#e2e8f0] px-6 py-[30px] flex justify-between items-center ">
							<h3 className="text-lg font-medium text-black ">Active Conversations</h3>
							<span className="rounded-md border-[.5px] border-[#e2e8f0] bg-gray-2 px-2 py-0.5 text-base font-medium text-black ">
								7
							</span>
						</div>
						<div className="flex max-h-full flex-col overflow-auto p-5">
							<form action="" className="sticky mb-7">
								<input
									type="text"
									className="w-full rounded  border-[1px] border-solid border-[#e2e8f0] bg-[#f7f9fc] py-2.5 pl-5 pr-10 text-sm outline-none focus:border-[#3c50e0] "
									placeholder="Search..."
								/>
								<button className="absolute right-4 top-1/2 -translate-y-1/2">
									<FontAwesomeIcon icon={faMagnifyingGlass} />
								</button>
							</form>
							<div className="no-scrollbar max-h-full space-y-2.5 overflow-auto">
								<div className="flex cursor-pointer items-center rounded px-4 py-2">
									<div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full">
										<img
											className="h-full w-full object-cover object-center"
											src="https://files.playerduo.net/production/static-files/logo.png"
											alt=""
										/>
										<span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-[#219653]"></span>
									</div>
									<div className="w-full">
										<h5 className="text-sm font-medium text-black">Henry Dholi</h5>
										<p className="text-sm font-medium text-[#64748b]">
											I cam across your profile and...
										</p>
									</div>
								</div>
								<div className="flex cursor-pointer items-center rounded px-4 py-2">
									<div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full">
										<img
											className="h-full w-full object-cover object-center"
											src="https://files.playerduo.net/production/static-files/logo.png"
											alt=""
										/>
										<span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-[#219653]"></span>
									</div>
									<div className="w-full">
										<h5 className="text-sm font-medium text-black">Henry Dholi</h5>
										<p className="text-sm font-medium">I cam across your profile and...</p>
									</div>
								</div>
								<div className="flex cursor-pointer items-center rounded px-4 py-2">
									<div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full">
										<img
											className="h-full w-full object-cover object-center"
											src="https://files.playerduo.net/production/static-files/logo.png"
											alt=""
										/>
										<span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-[#219653]"></span>
									</div>
									<div className="w-full">
										<h5 className="text-sm font-medium text-black">Henry Dholi</h5>
										<p className="text-sm font-medium">I cam across your profile and...</p>
									</div>
								</div>
								<div className="flex cursor-pointer items-center rounded px-4 py-2">
									<div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full">
										<img
											className="h-full w-full object-cover object-center"
											src="https://files.playerduo.net/production/static-files/logo.png"
											alt=""
										/>
										<span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-[#219653]"></span>
									</div>
									<div className="w-full">
										<h5 className="text-sm font-medium text-black">Henry Dholi</h5>
										<p className="text-sm font-medium">I cam across your profile and...</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex h-full flex-col border-l border-stroke  xl:w-3/4">
						<div className="sticky flex items-center justify-between border-b-[1px] border-[#e2e8f0] px-6 py-[19px]">
							<div className="flex items-center">
								<div className="mr-[18px] h-[52px] w-[52px] overflow-hidden rounded-full">
									<img
										src="https://files.playerduo.net/production/static-files/logo.png"
										alt=""
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<div className="">
									<h5 className="font-medium text-black">Henry Dholi</h5>
									<p className="text-[#64748b] text-sm font-medium">Reply to message</p>
								</div>
							</div>
						</div>
						<div className="no-scrollbar max-h-full space-y-3.5 overflow-auto px-6 py-[30px] flex-1"></div>
						<div className="sticky bottom-0 border-t border-[#e2e8f0] bg-white px-6 py-5 ">
							<form action="" className="flex items-center justify-between space-x-4.5">
								<div className="relative w-full">
									<input
										type="text"
										className="h-[52px] w-full rounded-md border-[1px] border-solid border-[#e2e8f0] bg-[#eff4fb] pl-5 pr-19 font-medium text-black placeholder-body outline-none focus:border-primary "
									/>
								</div>
								<button className="flex h-[52px] w-full max-w-[52px] ml-[18px] items-center justify-center rounded-md bg-[#3c50e0] text-white hover:bg-opacity-90">
									<FontAwesomeIcon icon={faPaperPlane} />
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatRoomAdmin;
