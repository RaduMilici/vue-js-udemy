new Vue({
    el: '#exercise',
    data: {
        effect: {
            hasHighlight: true,
            buttonText: 'start effect',
            interval: undefined,
            isRunning: false
        },
        arrClass: {
            textDeco: 'underline'
        },
        inputClass: {
            input: 'bluePost',
            boolVal: true,
            fontSize: 20
        },
        progressBar: {
            percent: 0
        }
    },
    methods: {
        startEffect() {
            this.effect.isRunning = true;
            this.effect.buttonText = 'stop effect';
            this.effect.interval = setInterval( () => {
                this.effect.hasHighlight = !this.effect.hasHighlight;
            }, 100);
        },
        stopEffect() {
            this.effect.isRunning = false;
            this.effect.buttonText = 'start effect';
            clearInterval(this.effect.interval);
        },
        startProgress() {
            setInterval( () => {
               this.progressBar.percent++;
            }, 50);
        }
    },
    computed: {
        currentEffect() {
            return {
                highlight: this.effect.hasHighlight,
                shrink: !this.effect.hasHighlight
            };
        },
        clickFunction() {
            return this.effect.isRunning ? this.stopEffect : this.startEffect;
        },
        isBold() {
            return this.inputClass.boolVal === true || this.inputClass.boolVal === 'true';
        },
        fontSize() {
            return `${this.inputClass.fontSize}px`;
        },
        progressBarWidth() {
            return `${this.progressBar.percent % 100}%`;
        }
    }
});
