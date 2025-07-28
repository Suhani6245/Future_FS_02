export default function SpecialRequirementForm() {
  return (
    <section className="w-full px-6 py-12 bg-[#F5F5F5]">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#54946C] text-center mb-4">Special Requirements?</h2>
      <p className="text-gray-700 text-center mb-8">
        Want a custom bouquet or have any special request? Let us know!
      </p>

      <div className="max-w-2xl mx-auto">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#54946C]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#54946C]"
          />
          <textarea
            placeholder="Describe your special request..."
            rows="4"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#54946C]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#54946C] text-white font-medium py-2 px-4 rounded-md hover:bg-[#3f7653] transition duration-300"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
