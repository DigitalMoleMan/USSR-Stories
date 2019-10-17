

/*
addNewStory = () => {
    // Define a new component
    document.body.appendChild(document.createElement('storySetup'))
}

Vue.component('story', {
    props: ['text', 'role'],
    template: '<div class="card"><p class="preview">{{ text }}</p></div>'
})

Vue.component('template-select', {
    data: () => {
        return {
            options: () => {
                var optionElements = '';
                var storyTemplates = JSON.parse(localStorage.getItem('storyTemplates'));
                for (var st of storyTemplates) {
                    console.log(st.name);
                    optionElements += (`<option value="${st.name}">${st.name}</option>`);
                }
                console.log(optionElements)
                return optionElements;
            }
        };

    },
    template: '<select>{{ options() }}</select>'
})

Vue.component('story-setup', {
    data: () => {
        return {
            content: ''
        }
    },
    template: `<div class="card storySetup edit"> <p class="preview"></p>
    <template-select></template-select>
    <input class="templateInput" type="text">
    <div class="tools">
        <div class="field">
            <div contenteditable="true"></div><a>:</a><div contenteditable="true"></div>
            <a>X</a>
        </div>
        <a>+</a>

        
    </div>
    <button>save</button></div>`
})

*/

const defaultData = {
    stories: [
        { // default story
            templateStr: 'Som en _roll vill jag _aktivitet i _sammanhang för att _orsak',
            fields: [
                {
                    link: '_roll',
                    value: 'elev'
                },
                {
                    link: '_aktivitet',
                    value: 'lära mig'
                },
                {
                    link: '_sammanhang',
                    value: 'skolan'
                },
                {
                    link: '_orsak',
                    value: 'jag vill få bra betyg'
                },
            ]
        },
        { // default story
            templateStr: 'Eftersom att jag jobbar på _roll kan jag _aktivitet på _sammanhang för att _orsak',
            fields: [
                {
                    link: '_roll',
                    value: 'te4'
                },
                {
                    link: '_aktivitet',
                    value: 'tända eld'
                },
                {
                    link: '_sammanhang',
                    value: 'skolan'
                },
                {
                    link: '_orsak',
                    value: 'kunna dö lycklig'
                },
            ]
        }
    ]
}



saveData = () => {
    localStorage.setItem('userstories_data', JSON.stringify(data));
}

loadData = () => {
    var loadedData = JSON.parse(localStorage.getItem('userstories_data'));
    if (loadedData) return loadedData;
    else return defaultData;
}

resetData = () => {
    localStorage.setItem('userstories_data', JSON.stringify(defaultData));
}
var data = loadData()

var app = new Vue({
    el: '#app',
    data: function () {
        return {
            stories: data.stories
        }
    },

    components: {
        'cardlist': {
            template: '<div class="cardContainer"><slot></slot></div>',
        },
        'storycard': {
            props: ['story'],
            data: function () {
                var storyText = this.story.templateStr;
                var storyFields = this.story.fields;

                for (field of storyFields) {
                    storyText = storyText.replace(field.link, field.value);
                }
                return {
                    text: storyText
                }
            },
            template: '<div class="card story"><p class="preview">{{ text }}</p></div>'
        },
        'editstorycard': {
            template: '<div class="card edit"><slot></slot></div>'
        },
        'newstory-button': {
            template: '<a class="card newStoryButton"><div class="newStory"><a>+</a></div></a>',
            methods: {
                addNewStory: () => { }
            }
        },
        'storyinput': {
            props: ['basestr'],
            
            template: '<div id="baseIn" class="input" contenteditable="true">a</div>',
            methods: {
                base: function () {
                    console.log(this.$el.innerHTML)
                }
            },
        }

        /* ,
        
        'storysetupcard': {
            template: `<div class="card storySetup edit"> <p class="preview"></p>
            <template-select></template-select>
            <input class="templateInput" type="text">
            <div class="tools">
                <div class="field">
                    <div contenteditable="true"></div><a>:</a><div contenteditable="true"></div>
                    <a>X</a>
                </div>
                <a>+</a>
        
                
            </div>
            <button>save</button></div>`
            
        }*/
    }
})
