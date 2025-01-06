const PortfolioCanvas = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-[#a6a6a6] to-[#ffffff]">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold">你的標題</h1>
        <p className="mt-4 text-lg">這是描述文字，可以放更多內容。</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg">按鈕</button>
      </div>
    </div>
  );
}