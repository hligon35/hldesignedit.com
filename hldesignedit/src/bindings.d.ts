declare global {
	interface Env {
		EMAIL: SendEmail;
		SAS_STORE: DurableObjectNamespace<import("./sas/storage").SasStore>;
		FORMS_TO_EMAIL?: string;
		FORMS_DISPLAY_TO_EMAIL?: string;
		FORMS_FROM_EMAIL?: string;
		ALLOWED_ORIGINS?: string;
		SAS_ALLOWED_ORIGINS?: string;
		TURNSTILE_SITE_KEY?: string;
		OPENAI_API_KEY?: string;
		TURNSTILE_SECRET_KEY?: string;
	}
}

export {};
