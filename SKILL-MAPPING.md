# Original skill mapping

Source: Adspirer/adspirer-cursor-plugin at 4fbb827.
Names use the Adspirer brand plus the platform or core task. "Social" is retained where it defines the workflow.
The Meta and TikTok names also exist in Main. These are package-local adaptations, not interchangeable tool contracts;
Cursor/Grok Bot duplicate-name resolution and co-installation remain pending client verification.
Retained means adapted for this endpoint, not blindly copied. Live capability validation remains necessary.

| Original | Social Ads | Treatment |
| --- | --- | --- |
| adspirer-agent | adspirer-paid-social | Preserve safety, goal-first work, routing, brand context; remove unsupported monitoring fallback |
| adspirer-docs | adspirer-product-help | Retain docs-first answering and adapted doc-map reference |
| adspirer-mcp | adspirer-social-ads-tools | Replace main-hub tool list with read/write social contract; adapted error reference |
| adspirer-setup | adspirer-connect-ad-accounts | Preserve connection, snapshot, BRAND.md/STRATEGY.md and optional memory; restrict file access and preserve existing files |
| adspirer-launch | adspirer-social-campaign-launch | Preserve goal/budget/tracking/build/readback workflow, scoped to Meta/TikTok |
| adspirer-optimize | adspirer-social-ads-optimization | Preserve waste, tracking, allocation, pacing, and verification; remove fixed thresholds and unsupported routers |
| adspirer-performance-review | adspirer-social-ads-performance | Preserve read-only scorecard, tracking, comparisons and anomaly investigation |
| adspirer-creative | adspirer-social-ad-creative | Preserve evidence-led copy, variants, fatigue and approved updates |
| adspirer-meta-ads | adspirer-meta-ads | Retain platform skill and creative-specs reference; adapt routing and stale absolute claims |
| adspirer-tiktok-ads | adspirer-tiktok-ads | Retain platform skill and validity matrix; make format/limit assertions conditional on live discovery |
| Google, LinkedIn, Amazon, ChatGPT Ads skills | Excluded | Not platforms served by this endpoint |
| None | adspirer-social-conversion-analysis | New guidance for conversion_funnel_analysis |
| None | adspirer-social-competitor-research | New scoped public competitor research |

The original main repository is unchanged. The generic main agent and its host-specific metadata
are not copied verbatim: the new scoped agent avoids Claude-only commands and unsupported tool routes.
