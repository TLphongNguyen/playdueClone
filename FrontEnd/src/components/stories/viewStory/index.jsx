import Comment from '~/components/comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faGift, faHeart, faMessage, faShare } from '@fortawesome/free-solid-svg-icons';
import { EyeOutlined } from '@ant-design/icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

function ViewStory({ storyUrl, avt, name, view }) {
	return (
		<div className="flex h-[892px]">
			<div className="w-[65%] flex relative">
				<button className="absolute w-[45px] h-[45px] bg-[#e3e3e3] text-[#7e7e7e] rounded-[50%] left-[140px] top-[50%] hover:text-[#fff] hover:bg-[#ed6056] ">
					<FontAwesomeIcon icon={faChevronLeft} className="leading-[45px] text-center text-[20px]" />
				</button>
				<div className="h-[90%] mt-[5%] w-[452px] mx-auto">
					<img src={storyUrl} alt="" className="w-[100%] h-[100%] object-cover" />
				</div>
				<button className="absolute w-[45px] h-[45px] bg-[#e3e3e3]  text-[#7e7e7e] rounded-[50%] right-[140px] top-[50%] hover:text-[#fff]	hover:bg-[#ed6056]">
					<FontAwesomeIcon icon={faChevronRight} className="leading-[45px] text-center text-[20px]" />
				</button>
				<div className="absolute right-[140px] bottom-[46px] ">
					<button className="block w-[45px] h-[45px] bg-[#e3e3e3]  text-[#696969] rounded-[50%] mb-[12px] hover:text-[#333]	">
						<FontAwesomeIcon icon={faHeart} className="leading-[45px] text-center text-[20px]" />
					</button>
					<button className="block w-[45px] h-[45px] bg-[#e3e3e3]  text-[#696969] rounded-[50%] mb-[12px] hover:text-[#333]	">
						<FontAwesomeIcon icon={faGift} className="leading-[45px] text-center text-[20px]" />
					</button>
					<button className="block w-[45px] h-[45px] bg-[#e3e3e3]  text-[#696969] rounded-[50%] hover:text-[#333]	">
						<FontAwesomeIcon icon={faShare} className="leading-[45px] text-center text-[20px]" />
					</button>
				</div>
			</div>
			<div className="w-[35%] bg-[#eeeeee] py-[15px] px-[10px] h-[100%]">
				<div className="header-comment flex item-center justify-between">
					<div className="text-center flex items-center">
						<img
							src={avt}
							alt=""
							className="w-[42px] h-[42px] rounded-[50%] p-[2px] mr-[10px] mx-[2px] object-cover"
						/>
						<div className="">
							<span className="text-[14px] text-[#5f67f8] font-[600] block leading-5">{name}</span>
							<span className="text-[12px] text-[#999] ">hom qua</span>
						</div>
					</div>
					<div className="">
						<button className="bg-[#ee756c] rounded-[15px] text-[#fff] py-[6px] px-[22px] w-[78px] font-[600] hover:bg-[#f0564a]">
							Thuê
						</button>
					</div>
				</div>
				<div className="interact flex justify-around py-[15px]">
					<div className=" text-[#636363] text-[15px] items-center">
						<EyeOutlined className="mr-[10px] text-[16px]" />
						{view}
					</div>
					<div className=" text-[#636363] text-[15px] items-center">
						<FontAwesomeIcon icon={faMessage} className="mr-[10px] text-[16px]" />0
					</div>
					<div className=" text-[#636363] text-[15px] items-center">
						<FontAwesomeIcon icon={faHeart} className="mr-[10px] text-[16px]" />0
					</div>
				</div>
				<div className="caption pb-[5px] border-b-[1px] border-solid border-[#dcdcdc]">
					<div className="mb-[10px]">
						<span className="text-[14px] text-[#333] leading-[1.5]">day la caption</span>
					</div>
					<div className="mb-[10px]">
						<span className="text-[14px] text-[#333] leading-[1.5]">day la hathtag</span>
					</div>
				</div>
				<div className="py-[15px] h-comment">
					<Comment
						name={'phong'}
						avt="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/349365824_146127085118919_709175759027608189_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=PcIiLj4jvKMQ7kNvgEdu-t6&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDE6qGtR6KsgsKUCT3k1juKb9loktNbVJBH6_WVgzq6ig&oe=66A98EA6"
						time={4}
						content={'xinh qua'}
					/>
				</div>
				<div className="w-[100%] py-[10px] border-t-[1px] border-solid border-[#dcdcdc]">
					<div className="flex px-4 py-2 h-10 border-[1px] border-solid border-[#e3e3e3] bg-[#fff] transition-[0.3s] ease-linear ">
						<input placeholder="Comment.." className="h-[100%] w-[100%] focus:border-[#ccc]" type="text" />
						<FontAwesomeIcon icon={faPaperPlane} className="text-[20px]" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ViewStory;
