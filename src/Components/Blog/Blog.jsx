import author_imgs from '../../assets/images/boy2.png'
import { IoBookmarks } from "react-icons/io5";

import PropTypes from 'prop-types';
const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    const {id, title, cover, author, reading_time, posted_time, hashtag} = blog;
    return (
        <div className='mb-8 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`The cover picture ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                        <img className='w-14' src={author_imgs} alt="" />
                        <div className='ml-6'>
                            <h3 className='text-2xl'>{author}</h3>
                            <p>{posted_time}</p>
                        </div>
                </div>
                <div className='flex items-center'>
                        <span>{reading_time} min red</span>
                        <button 
                        onClick={() =>handleAddToBookmarks(blog)}
                        className='ml-3 text-2xl text-orange-800'
                        ><IoBookmarks />
                        </button>
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p>{hashtag}</p>

            <button 
            onClick={()=>handleMarkAsRead(id, reading_time)}
            className='text-purple-800 underline font-bold'
            >Mark As Read</button>
            {/* {
                hashtag.map((hash, idx)=> <p  key={idx}><a href="#">#{hash}</a></p>)
            } */}
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;