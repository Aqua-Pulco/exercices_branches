➜  ada pwd
/home/irisy/ada
➜  ada ls
cours               iris   linux_commands      projets_persos  syntaxes    vim_commands
exercices_branches  katas  projets_collectifs  repositories    unboarding
➜  ada cd cours
➜  cours ls
git_commands.md
➜  cours cd ..
➜  ada cd exercices_branches
➜  exercices_branches git:(main) ✗ git branch
➜  exercices_branches git:(main) ✗ git branch irisBranche
➜  exercices_branches git:(main) ✗ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        c04/ex2.html
        c04/ex2.js

nothing added to commit but untracked files present (use "git add" to track)
➜  exercices_branches git:(main) ✗ git checkout irisBranche
Switched to branch 'irisBranche'
➜  exercices_branches git:(irisBranche) ✗ git status
On branch irisBranche
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        c04/ex2.html
        c04/ex2.js

nothing added to commit but untracked files present (use "git add" to track)
➜  exercices_branches git:(irisBranche) ✗ pwd
/home/irisy/ada/exercices_branches
➜  exercices_branches git:(irisBranche) ✗ ls
c03  c04
➜  exercices_branches git:(irisBranche) ✗ git add. c04
git: 'add.' is not a git command. See 'git --help'.

The most similar command is
        add
➜  exercices_branches git:(irisBranche) ✗ git add c04
➜  exercices_branches git:(irisBranche) ✗ git commit - "test irisBranche newBranch"
error: pathspec '-' did not match any file(s) known to git
error: pathspec 'test irisBranche newBranch' did not match any file(s) known to git
➜  exercices_branches git:(irisBranche) ✗ git commit -m "test irisBranche newBranch"
[irisBranche 502c7c5] test irisBranche newBranch
 2 files changed, 40 insertions(+)
 create mode 100644 c04/ex2.html
 create mode 100644 c04/ex2.js
➜  exercices_branches git:(irisBranche) git push
fatal: The current branch irisBranche has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin irisBranche

➜  exercices_branches git:(irisBranche) git push -u origin irisBranche
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 845 bytes | 211.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'irisBranche' on GitHub by visiting:
remote:      https://github.com/Aqua-Pulco/exercices_branches/pull/new/irisBranche
remote:
To github.com:Aqua-Pulco/exercices_branches.git
 * [new branch]      irisBranche -> irisBranche
Branch 'irisBranche' set up to track remote branch 'irisBranche' from 'origin'.
➜  exercices_branches git:(irisBranche) git status
On branch irisBranche
Your branch is up to date with 'origin/irisBranche'.

nothing to commit, working tree clean
➜  exercices_branches git:(irisBranche) code yess.md
➜  exercices_branches git:(irisBranche) git push -u origin main
Branch 'main' set up to track remote branch 'main' from 'origin'.
Everything up-to-date
➜  exercices_branches git:(irisBranche) git branch -d irisBranche
error: Cannot delete branch 'irisBranche' checked out at '/home/irisy/ada/exercices_branches'
➜  exercices_branches git:(irisBranche) git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
➜  exercices_branches git:(main) git branch -d irisBranche
warning: deleting branch 'irisBranche' that has been merged to
         'refs/remotes/origin/irisBranche', but not yet merged to HEAD.
Deleted branch irisBranche (was 502c7c5).
➜  exercices_branches git:(main) git commit --amend -m "test branch commands"
[main c0b6841] test branch commands
 Date: Wed Jun 4 17:33:02 2025 +0200
 9 files changed, 62 insertions(+), 3 deletions(-)
 rename {declaration => c03/declaration}/alert1/alert1.html (100%)
 rename {declaration => c03/declaration}/alert1/alert1.js (98%)
 rename {declaration => c03/declaration}/alert2/alert2.html (100%)
 rename {declaration => c03/declaration}/alert2/alert2.js (100%)
 rename {ordre_execution => c03/ordre_execution}/ex3.md (100%)
 create mode 100644 c03/ordre_execution/exo.js
 create mode 100644 c03/plus/webex5.js
 rename {syntaxe => c03/syntaxe}/debug.js (100%)
 create mode 100644 c04/ex1.js
➜  exercices_branches git:(main) git status
On branch main
Your branch and 'origin/main' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

nothing to commit, working tree clean
➜  exercices_branches git:(main) ls
c03  c04
➜  exercices_branches git:(main) git push
To github.com:Aqua-Pulco/exercices_branches.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'github.com:Aqua-Pulco/exercices_branches.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
➜  exercices_branches git:(main) git checkout irisBranche
Branch 'irisBranche' set up to track remote branch 'irisBranche' from 'origin'.
Switched to a new branch 'irisBranche'
➜  exercices_branches git:(irisBranche) git checkout main
Switched to branch 'main'
Your branch and 'origin/main' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)
➜  exercices_branches git:(main) git reset --hard origin/main
HEAD is now at 561fb36 ex c04 v1
➜  exercices_branches git:(main) git merge irisBranche
Updating 561fb36..502c7c5
Fast-forward
 c04/ex2.html | 11 +++++++++++
 c04/ex2.js   | 29 +++++++++++++++++++++++++++++
 2 files changed, 40 insertions(+)
 create mode 100644 c04/ex2.html
 create mode 100644 c04/ex2.js
➜  exercices_branches git:(main) git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
➜  exercices_branches git:(main)