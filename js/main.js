var addProjectButton = new Vue({
    el: '#addProjectButton',
    data: {
        message: 'Som en [ROLL] vill jag [AKTIVITET] i [SAMMANHANG] för att [ORSAK].'
    },
    methods: {
        addNewStory: function () {

        }
    }
})

var storySetup = new Vue({
    el: '#storySetup',
    data: {
        template: `Som en elev vill jag [AKTIVITET] i [SAMMANHANG] för att [ORSAK].`,
        role: ''
    }
})

var fields = new Vue({
    el: '#fields',
    data: {
        role: 'elev'
    }
})