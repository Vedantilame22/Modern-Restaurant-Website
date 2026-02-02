function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-green-600 text-white rounded-md">
      {children}
    </button>
  );
}

export default Button;
