import { Link } from "react-router-dom"

const MdaItem = ({ mda }) => {
    return (
        <article className="relative max-w-full p-4 mt-8 shadow-lg border-4 border-green-600 rounded-md duration-300 hover:shadow-xl bg-gradient-to-bl from-neutral-200 via-neutral-200 to-neutral-400">
            {/* Middle Border (Neutral Gray) - Slightly Shifted */}
            <div className="absolute inset-0 -z-10 rounded-md border-4 border-neutral-300 translate-x-2 translate-y-2"></div>

            {/* Outer Border (Blue) - Further Shifted */}
            <div className="absolute inset-0 -z-20 rounded-md border-4 border-blue-600 translate-x-4 translate-y-4"></div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">{mda.name}</h2>
            <div className="flex gap-x-3 my-2">
                <svg className="flex-shrink-0 size-6 text-emerald-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-emerald-600 text-sm sm:text-base mb-2">Address:<span className="font-medium text-neutral-900"> {mda.address}</span></p>
            </div>
            <div className="flex gap-x-3 my-2">
                <svg className="flex-shrink-0 size-6 text-emerald-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 11 18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
                <p className="text-emerald-600 text-sm sm:text-base mb-2">Contact: <span className="font-medium text-neutral-900">{mda.phone}</span></p>
            </div>
            <div className="flex gap-x-3 my-2">
                <svg className="flex-shrink-0 size-6 text-emerald-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <p className="text-emerald-600 text-sm sm:text-base mb-2">Email: <span className="font-medium text-neutral-900">{mda.email}</span></p>
            </div>

            {mda.website && (
                <Link to={mda.website} className="text-white bg-emerald-900 px-3 py-2 rounded-xl text-sm sm:text-base">
                    Website
                </Link>
            )}
        </article>


    )
}

export default MdaItem