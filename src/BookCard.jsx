
function BookCard(props) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-slate-100">

      <div className="bg-slate-50 rounded-xl p-4 mb-5">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-64 object-contain rounded-lg"
        />
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
        {props.title}
      </h3>

      <p className="text-sm text-slate-500">
        {props.author}
      </p>

    </div>
  );
}

export default BookCard;

