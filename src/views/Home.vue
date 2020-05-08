<template>
	<div>
		<section class="section">
			<div class="container">
					<div class="columns">
							<div class="column is-8 is-offset-2">
									<horizontal-stepper :steps="Steps" @completed-step="completeStep"
										@active-step="isStepActive" @stepper-finished="alert"
									>                     
									</horizontal-stepper>
							</div>
					</div>
			</div>
		</section>
		<section class="home">
		</section>
	</div>
</template>

<script>
// @ is an alias to /src
import CHOOSECAR from '@/components/chooseCar.vue';
import HorizontalStepper from 'vue-stepper';
import CREATEREQUEST from '@/components/createRequest.vue';
import CHOOSEEXTRA from '@/components/chooseExtra.vue';
import REVIEWANDBOOK from '@/components/reviewAndBook.vue';

export default {
  name: 'Home',
  components: {
    CHOOSECAR,
    HorizontalStepper
  },
  data(){
		return {
					Steps: [
						{
							// icon: 'report_problem',
							name: 'second',
							title: 'Create request',
							subtitle: 'Subtitle sample',
							component: CREATEREQUEST,
							completed: false
						},
						{
							// icon: 'mail',
							name: 'first',
							title: 'Choose car',
							subtitle: 'Subtitle sample',
							component: CHOOSECAR,
							completed: false

						},
						{
							// icon: 'report_problem',
							name: 'third',
							title: 'Choose extra',
							subtitle: 'Subtitle sample',
							component: CHOOSEEXTRA,
							completed: false
						},
						{
							// icon: 'report_problem',
							name: 'fourth',
							title: 'Review and Book',
							subtitle: 'Subtitle sample',
							component: REVIEWANDBOOK,
							completed: false
						}
					]
			}
  },
	methods: {
		// Executed when @completed-step event is triggered
		completeStep(payload) {
				this.Steps.forEach((step) => {
						if (step.name === payload.name) {
								step.completed = true;
								// this.$emit('can-continue', {value: true});
						}
				})
		},
		// Executed when @active-step event is triggered
		isStepActive(payload) {
				this.Steps.forEach((step) => {
						if (step.name === payload.name) {
								if(step.completed === true) {
										step.completed = false;
								}
						}
				})
		},
		// Executed when @stepper-finished event is triggered
		alert(payload) {
				alert('end')
		}

		// this.$emit('can-continue', {value: true});
	}
};
</script>

<style scoped>
	.stepper-box .top .steps-wrapper .step .circle{
		margin-bottom: 1rem;
	}
	div.stepper-box div.top div.divider-line {
		background-color: red;
		width: 0%!important;
		border:0!important;
	}
	div.divider-line {
		width: 0%!important;
	}
	
</style>
