const execa = require('execa');

const localPath = process.cwd();
console.log("当前: " + localPath);
const commitMessage = process.argv[2] ? process.argv[2] : '';
const releaseBranch = process.argv[3] ? process.argv[3] : 'sit';
const branchName = /*process.argv[3] ||*/ execa.commandSync('git branch --show-current ').stdout;
console.log('当前分支: ',branchName)
console.log('commit 备注: ',commitMessage)

function updateBranch(haveChangesFiles){
    try {
        if(haveChangesFiles) git(' git stash save "command git push" ');
        git(` git checkout ${releaseBranch} `)
        git(' git pull ');
        git(' git checkout ' + branchName)
        if(haveChangesFiles) git(' git stash pop ');
        return true;
    } catch (error) {
        return;        
    }
}

function run() {
    if (!commitMessage) return;
    if (!branchName) return;
    const haveChangesFiles = haveChanges();
    if (branchName==='dev') {
        console.log(`不能以${branchName}分支为当前操作的目标分支， 这可是要进行合并操作的！！ 醒醒!!`)
        return;
    };
    if(branchName==='sit' || branchName === 'sit-send') {
        console.log(`不能以${branchName}分支为当前操作的目标分支， 这可是要进行合并操作的！！ 醒醒!!`)
        return;
    };
    if( haveChanges()){
        console.log('有变更文件')
    }else{
        console.log('没有变更文件')
    }

    const isUpdateBranchNext = updateBranch(haveChangesFiles)
    if(!isUpdateBranchNext) return;

    console.log(releaseBranch + '分支已同步置最新')

    if(haveChangesFiles){
        git('git add .')
        git(`git commit -m  "${commitMessage}" `)
    }
    git("git  push ")
    // git('git  checkout uat ')
    // git(`git  pull origin ${branchName} `)
    // git('git  push ')
    git(`git  checkout ${releaseBranch} `)
    git(`git  pull origin ${branchName} `)
    git('git  push ')
    // git('git  checkout dev ')
    // git(`git  pull origin ${branchName} `)
    // git('git  push ')
    git(`git  checkout ${branchName} `)
    // const execaArr = []
    // execaArr.forEach(item => git(item));
    console.log('success! ')
}

run();

function git(execaCommand) {
    const execaReturn = execa.commandSync(execaCommand,{shell:true}).stdout;
    console.log(execaReturn, `execaCommand: ${execaCommand}`);
    return execaReturn;
}
function transcoding(code){
    return Buffer.from(code, 'utf-8').toString('binary'); 
}

function haveChanges(){
    const execaReturn = git('git status --porcelain');
    const statusList = execaReturn.split(/\n/).filter(Boolean).map(item=>({isStage:item.indexOf('M ')===0,item}));
    return statusList.length
}