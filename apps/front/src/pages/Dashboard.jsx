import {DashboardCardComponent} from "../components/DashboardCardComponent"

export const Dashboard = () => {
    return <>
       <div>
            <div className="bg-pink-100 h-16 w-full flex justify-center items-center">
                <div className=" bg-gray-100 border-0 rounded-2xl">
                    <div className="flex justify-evenly mx-5 my-2">
                        <div className="mx-3 border-0 rounded-lg inset-shadow-sm inset-shadow-gray-500 px-3">Home</div>
                        <div className="mx-3 font-meow border-0 text-xl px-3 rounded-lg inset-shadow-sm inset-shadow-gray-500">Your Content</div>
                        <div className="mx-3 px-3 border-0 inset-shadow-sm inset-shadow-gray-500 rounded-lg">About</div>
                    </div>
                </div>
            </div>
            <div className="mx-40">
                <div className="text-3xl my-5">helo,User</div>
                <div className="my-5">Choose your Level
                    <select name="cars" id="cars" className="outline-0 mx-1 bg-gray-300 rounded-lg hover:outline-2 hover:outline-blue-400 hover:cursor-pointer">
                        <option value="N5">N5</option>
                        <option value="N4">N4</option>
                        <option value="N3">N3</option>
                    </select>
                </div>

                <div className="grid grid-cols-3 grid-rows-2 my-2 gap-4 justify-evenly
                ">
                    <DashboardCardComponent title="Hiragana" japaneseTitle="(ひらがな)"/>
                    <DashboardCardComponent title="Katakana" japaneseTitle="(カタカナ)"/>
                    <DashboardCardComponent title="Numbers" japaneseTitle="(ばんごう)"/>
                    <DashboardCardComponent title="Vocabulary" japaneseTitle="(ごい)"/>
                    <DashboardCardComponent title="Grammar" japaneseTitle="(ぶんぽう)"/>
                    <DashboardCardComponent title="Kanji" japaneseTitle="(かんじ)"/>
                
                 </div>
            </div>
            
                
       </div>
    </>
}

