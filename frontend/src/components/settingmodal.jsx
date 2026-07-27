export default function SettingsModal(){

    return (
        <div className="glass rounded-3xl p-8 w-[420px]">
            <h2 className="text-3xl font-bold">
                ⚙ Settings
            </h2>

            <div className="mt-8 space-y-5">

                <div className="glass rounded-2xl p-5">
                    🌸 Theme
                </div>

                <div className="glass rounded-2xl p-5">
                    🔔 Notifications
                </div>

            </div>
        </div>
    )
}