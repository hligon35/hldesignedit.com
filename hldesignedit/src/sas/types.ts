import { z } from "zod";

export const SasCategorySchema = z.object({
	score: z.number(),
	summary: z.string(),
});

export const SasTopFixSchema = z.object({
	title: z.string(),
	impact: z.enum(["high", "medium", "low"]),
	description: z.string(),
});

export const SasSectionInsightSchema = z.object({
	section: z.string(),
	whatIsWrong: z.string(),
	whyItMatters: z.string(),
	whatToDo: z.string(),
});

export const SasReportSchema = z.object({
	id: z.string(),
	url: z.string().url(),
	timestamp: z.string(),
	overallScore: z.number(),
	categories: z.object({
		conversion: SasCategorySchema,
		traffic_seo: SasCategorySchema,
		ux_ui: SasCategorySchema,
		brand_consistency: SasCategorySchema,
	}),
	topFixes: z.array(SasTopFixSchema),
	sectionInsights: z.array(SasSectionInsightSchema),
	clientFacingSummary: z.string(),
	aiScaffoldPrompt: z.string(),
	consultantScript: z.string(),
});

export const SasAnalysisSchema = SasReportSchema.omit({
	id: true,
	timestamp: true,
});

export type SasReport = z.infer<typeof SasReportSchema>;
export type SasAnalysis = z.infer<typeof SasAnalysisSchema>;