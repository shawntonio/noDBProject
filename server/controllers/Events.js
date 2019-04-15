let eventId = 1
let giftId = 1

let events = [
	{
		id: eventId++,
		eventName: "Ezra's 3rd birthday",
		gifts: [
			{
				giftName: "XDP Recreation -The Titan Swing Set",
				giftPic: "https://secure.img1-fg.wfcdn.com/im/56973496/resize-h600%5Ecompr-r85/5030/50301163/The+Titan+Swing+Set.jpg",
				price: 189.99,
				giftId: giftId++,
				fund: 0
			},
			{
				giftName: "Rock Collector Set",
				giftPic: "https://www.911metallurgist.com/blog/wp-content/uploads/2015/08/rock_and_mineral_collection_for_sale.png",
				price: 34.96,
				giftId: giftId++,
				fund: 0
			}
		],
		eventDate: "June 19, 2019"
	},
	{
		id: eventId++,
		eventName: "Jazmin's 26th birthday",
		gifts: [
			{
				giftName: "Weekend in Vegas", 
				giftPic: "https://www.tripsavvy.com/thmb/kvGgCFm-OgGKWDLEAJ_ngmpjYJM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/las-vegas-sign-at-night-596570141-592d94915f9b585950c6effa.jpg",
				price: 1500,
				giftId: giftId++,
				fund: 550
			}
		],
		eventDate: "May 23, 2019"
	}
]

module.exports = {
	read: (req, res) => {
		req.query.event ? res.send(events.filter(event => event.eventName.toLowerCase().includes(req.query.event.toLowerCase())))
		:res.send(events)
	},

	create: (req, res) => {
		req.body.id = eventId++
		events.push(req.body)
		res.send(events)
	},

	update: (req, res) => {
		const {id} = req.params
		const index = events.findIndex(event => +id === +event.id)
		events.splice(index, 1, req.body)
		res.send(events)
	},

	delete: (req, res) => {
		const {id} = req.params
		const index = events.findIndex(event => +id === +event.id)
		events.splice(index, 1)
		res.send(events)
	}
}