export default function FloatingPetals(){

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">

            <div className="absolute top-20 left-20 text-pink-300 text-4xl animate-bounce">
                ✿
            </div>

            <div className="absolute top-40 right-32 text-pink-200 text-3xl animate-pulse">
                ✿
            </div>

            <div className="absolute bottom-20 left-1/3 text-purple-300 text-4xl animate-bounce">
                ✦
            </div>

        </div>
    )
}