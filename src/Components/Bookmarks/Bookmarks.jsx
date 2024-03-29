import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-400 ml-4 text-center p-4 rounded-md mt-8">
            <div className='bg-gray-500 p-4 rounded-lg my-3'>
                <h3 className='text-4xl'>Rading Time {readingTime}</h3>
            </div>
            <h2 className="text-3xl">Bookmarks Blogs {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark 
                 key={idx}
                 bookmark={bookmark}
                 ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;