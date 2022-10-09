
function goTest() {
    this.isNavigator = false
    if (this.$route.path === "/test") {
        this.$message.success('您已经在该界面了哦')
    } else this.$router.push("test");
}

function goTest2() {
    this.isNavigator = false
    if (this.$route.path === "/test2") {
        this.$message.success('您已经在该界面了哦')
    } else this.$router.push("test2");
}

function goTest3() {
    this.isNavigator = false
    if (this.$route.path === "/test3") {
        this.$message.success('您已经在该界面了哦')
    } else this.$router.push("test3");
}

function goTest4() {
    this.isNavigator = false
    if (this.$route.path === "/test4") {
        this.$message.success('您已经在该界面了哦')
    } else this.$router.push("test4");
}

export { goTest,goTest2,goTest3,goTest4 }
