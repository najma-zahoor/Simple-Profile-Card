export default function ProfileCard() { //export default function means that this component can be imported without using curly braces in other files.
  return (
    <div className="w-64 p-5 rounded-lg shadow-lg text-center bg-white">
      
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />

      <h2 className="text-xl font-bold" style={{ color: 'black' }}>
        John Doe
      </h2>

      <p className="text-gray-600 mb-3">Frontend Developer</p>

      <hr className="my-3" />

      <p className="italic text-gray-700 mb-5">
        "I build UI with React"
      </p>

      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
        Follow
      </button>

    </div>
  );
}