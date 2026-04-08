// props receive the passed props from parent component: APP in object form 
export const Moviecard = (props) => {
    // Destructuring the props to get the detailed info for cleaner code
  const { src, title, Genre, Stars, Language, Quality } = props;
  return (
    <>
      <div className="movie-card">
        <img src={src} alt="Dhurandhar Poster" />
        <div className="title">{title}</div>
        <p>Genre: {Genre}</p>
        <p>Stars: {Stars}</p>
        <p>Language: {Language}</p>
        <p>Quality: {Quality}</p>
      </div>
    </>
  );
};



// map method is used to transform each element of an array and return a new array containing the results.
// Importantly:
// It does not mutate the original array.
// It is functional in nature and fits well in immutable patterns often preferred in modern JavaScript and React/Redux workflows.



// 2. Syntax
// const newArray = array.map(callback(currentValue, index, array), thisArg);

// Parameters:

// Parameter:       	      Description:
// callback          	        Function that produces an element of the new array. It receives three arguments: currentValue, index, array.
// currentValue	                The current element being processed in the array.
// index (optional)          	The index of the current element.
// array (optional)          	The original array on which map was called.
// thisArg (optional)          	Value to use as this when executing the callback.

// Return Value:
// A new array with elements transformed by the callback.