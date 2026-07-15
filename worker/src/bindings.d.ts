declare global {
	interface Env {
		EMAIL: SendEmail;
		FORMS_TO_EMAIL?: string;
		FORMS_DISPLAY_TO_EMAIL?: string;
		FORMS_FROM_EMAIL?: string;
		ALLOWED_ORIGINS?: string;
	}
}

export {};
