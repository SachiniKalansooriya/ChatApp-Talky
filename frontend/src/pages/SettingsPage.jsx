import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send, Smile, Image } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey, what’s up?", isSent: false },
  { id: 2, content: "Not much, just chilling. You?", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="container h-screen max-w-5xl px-4 pt-20 mx-auto">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Select a Theme</h2>
      
        </div>

        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
          {THEMES.map((t) => (
            <label
              key={t}
              className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors cursor-pointer`}
            >
              <input
                type="radio"
                name="theme"
                value={t}
                checked={theme === t}
                onChange={() => setTheme(t)}
                className="hidden"
              />
              {/* Custom Circle (Radio Button) */}
              <div
                className={`relative w-8 h-8 rounded-full border-2 
                  ${theme === t ? "border-blue-700 bg-blue-700" : "border-gray-300 bg-white"} 
                  flex items-center justify-center`}
              >
                {theme === t && (
                  <div className="w-4 h-4 bg-white rounded-full"></div> // The inner circle when selected
                )}
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </label>
          ))}
        </div>

        {/* Preview Section */}
        <h3 className="mb-3 text-lg font-semibold">Preview</h3>
        <div className="overflow-hidden border shadow-lg rounded-xl border-base-300 bg-base-100">
          <div className="p-4 bg-base-200">
            <div className="max-w-lg mx-auto">
              {/* Mock Chat UI */}
              <div className="overflow-hidden shadow-sm bg-base-100 rounded-xl">
                {/* Chat Header */}
                <div className="px-4 py-3 border-b border-base-300 bg-base-100">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 font-medium rounded-full bg-primary text-primary-content">
                      <img
                        src="/avatar.png"
                        alt="Avatar"
                        className="object-cover rounded-full size-9"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Lily Jane</h3>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-xl p-3 shadow-sm
                          ${message.isSent ? "bg-gray-300 text-black" : "bg-gray-200 text-black"}`}
                      >
                        <p className="text-sm text-black">{message.content}</p>
                        <p
                          className={`text-[10px] mt-1.5 text-black`}
                        >
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-base-300 bg-base-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 h-10 text-sm input input-bordered"
                      placeholder="Type a message..."
                      value="This is a preview"
                      readOnly
                    />
                    {/* Import Photos Icon */}
                    <button className="flex items-center justify-center h-10 min-h-0 p-2 rounded-full bg-base-200">
                      <Image size={18} />
                    </button>

                    {/* Emoji Picker Icon */}
                    <button className="flex items-center justify-center h-10 min-h-0 p-2 rounded-full bg-base-200">
                      <Smile size={18} />
                    </button>

                    <button className="h-10 min-h-0 btn btn-primary">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
