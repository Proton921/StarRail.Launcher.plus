/* eslint-disable no-unused-vars */
async function launchGame(){
    let gamePath
    gamePath = window.electronAPI.readData('GamePath.txt')
    if (!(window.electronAPI.isValid(gamePath))){
        firstLaunchGame()
        return
    }
    //To be continued.
}
async function firstLaunchGame(){
    const gamePath = await window.electronAPI.openFile()
    window.electronAPI.writeData('GamePath.txt',gamePath)
}