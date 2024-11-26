/* The main module for this is external. */
const elements = document.querySelectorAll('[data-js="filter"]');
if (elements.length) {
  import('https://assets.stoumann.dk/js/css-filter.mjs')
    .then(module => {
    const jsClass = module.default;
    elements.forEach(element => {
      new jsClass(element, element.dataset, presets);
    });
  })
}

/* Default presets for localhost demo / or when REST API fails */
const presets = [
  {
	"name": "watercolor",
	"description": "",
	"value": "url('#squiggly-1') brightness(1.3) invert(0.17) saturate(2.6) sepia(0.25)",
	"values": [
		{
			"brightness": 1.3,
			"invert": 0.17,
			"saturate": 2.6,
			"sepia": 0.25,
			"url": "url('#squiggly-1')"
		}
	]
},
{
	"name": "faded-photo",
	"description": "",
	"value": "blur(0.2px) brightness(1.1) hue-rotate(5deg) opacity(0.9) saturate(1.3) sepia(0.4)",
	"values": [
		{
			"blur": 0.2,
			"brightness": 1.1,
			"hue-rotate": 5,
			"opacity": 0.9,
			"saturate": 1.3,
			"sepia": 0.40
		}
	]
},
{
	"name": "old-horror",
	"description": "",
	"value": "url('#grain') grayscale(1) sepia(0.5) brightness(1.3) invert(0.8)",
	"values": [
		{
			"url": "url('#grain')",
			"grayscale": 1,
			"sepia": 0.5,
			"brightness": 1.3,
			"invert": 0.8
		}
	]
},
{
	"name": "old-grainy",
	"description": "",
	"value": "url('#grain') grayscale(0.6) sepia(0.5) brightness(1.5)",
	"values": [
		{
			"url": "url('#grain')",
			"grayscale": 0.6,
			"sepia": 0.5,
			"brightness": 1.5
		}
	]
},
{
	"name": "fade-out",
	"description": "",
	"value": "brightness(0.8) hue-rotate(350deg) saturate(3) blur(8px) contrast(0.6)",
	"values": [
		{
			"brightness": 0.8,
			"hue-rotate": 350,
			"saturate": 3,
			"blur": 8,
			"contrast": 0.6
		}
	]
},
{
	"name": "mist",
	"description": "",
	"value": "url('#fluffy') brightness(0.8) saturate(0.8)",
	"values": [
		{
			"url": "url('#fluffy')",
			"brightness": 0.8,
			"saturate": 0.8
		}
	]
}
];