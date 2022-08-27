const mongoose = require("mongoose");

const educatorSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
		},
		email: {
			type: String,
			trim: true,
			unique: true,
			lowercase: true,
		},
		mobile: {
			type: String,
		},
		password: {
			type: String,
			// required: true,
		},
		isAuthenticated: {
			type: Boolean,
			default: false,
		},
		verificationCode: {
			type: String,
			//required: true,
		},
		personalInfo: {
			// fName: {
			//   type: String,
			//   default: "",
			// },
			// lName: {
			//   type: String,
			//   default: "",
			// },
			name: {
				type: String,
				default: "",
			},
			pincode: {
				type: String,
				default: "",
			},
			country: {
				type: String,
				default: "",
			},
			state: {
				type: String,
				default: "",
			},
			district: {
				type: String,
				default: "",
			},
			currentAdd: {
				type: String,
				default: "",
			},
			permanentAdd: {
				type: String,
				default: "",
			},
			linkedin: {
				type: String,
				default: "",
			},
			youtube: {
				type: String,
				default: "",
			},
			twitter: {
				type: String,
				default: "",
			},
			website: {
				type: String,
				default: "",
			},
			school: {
				type: String,
				default: "",
			},
			schoolStart: {
				type: Number,
				default: "",
			},
			schoolEnd: {
				type: Number,
				default: "",
			},
			university: {
				type: String,
				default: "",
			},
			universityStart: {
				type: Number,
				default: "",
			},
			universityEnd: {
				type: Number,
				default: "",
			},
			experienceOrg: {
				type: String,
				default: "",
			},
			orgStart: {
				type: Number,
				default: "",
			},
			orgEnd: {
				type: Number,
				default: "",
			},
			resume: {
				type: String,
				default: "",
			},
			video: {
				type: String,
				default: "",
			},
			verified: {
				type: Boolean,
				default: false,
			},
		},
		// { type: PersonalSchema, required: true },
		notifications: {
			email: {
				type: Boolean,
				default: true,
			},
			sms: {
				type: Boolean,
				default: true,
			},
			chat: {
				type: Boolean,
				default: true,
			},
		},
		bankDetails: {
			accountNo: {
				type: String,
				default: null,
			},
			bankName: {
				type: String,
				default: null,
			},
			ifsc: {
				type: String,
				default: null,
			},
			holder: {
				type: String,
				default: null,
			},
			upi: {
				type: String,
				default: null,
			},
		},
		privacy: {
			location: {
				type: Boolean,
				default: true,
			},
			twoStepAuth: {
				type: Boolean,
				default: false,
			},
		},
	},
	{ timestamps: true }
);

const Educator = mongoose.model("Educator", educatorSchema);

exports.Educator = Educator;
