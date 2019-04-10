let eventId = 1
let giftId = 1

let events = [
	{
		id: eventId++,
		eventName: "Ezra's 3rd birthday",
		gifts: [
			{
				gift: "XDP Recreation -The Titan Swing Set", 
				price: 189.99,
				giftId: giftId++
			},
			{
				gift: "Rock Collector Set",
				price: 34.96,
				giftId: giftId++
			}
		],
		fund: 0,
		eventDate: "June 19, 2019",
	},
	{
		id: eventId++,
		eventName: "Jazmin's 26th birthday",
		gifts: [
			{
				gift: "Weekend in Vegas", 
				price: 1500,
				giftId: giftId++,
			}
		],
		fund: 550,
		eventDate: "May 23, 2019",
	}
]

module.exports = {
	read: (req, res) => {
		res.send(events)
	},
}