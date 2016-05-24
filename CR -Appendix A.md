Appendix A: Consent Receipt Extensions

The MVCR (Minimum Viable Consent Receipt) is a process used to create consent receipts that puts people in the control of personal data.  The Consent Receipt is the resulting specification for utilizing this process for creating an open standard candidate for dynamic consent and proof of consent. Consent Receipt v2 is the extension of Consent Receipt v1 and focuses on the processing of sensitive personal information and v2.1 focus on consent receipts with compliance claims, that map laws and notices to demonstrate compliance.

Extending the Consent Receipt involves adding more specific detail. The Consent Receipt v.1 is used to create receipts for sensitive personal information (CR v2 Appendix A) or for COMPLIANCE with an explicit Consent Receipt (v2.1 Appendix A), all of these profiles are then useful to specify more granular operational policy and technical SCOPE(s) of consent for information sharing (if required).

Consent Receipt (CR) v2 Sensitive PI: Conformance and Compliance

Consent Receipt V.1 provides the

6.2 Consent Receipt for SENSITIVE Personal Information (TBF)
Additional Fields Proposed | Receipt Field Label | Receipt Field Format | Data Field Name | Data Type | Example Data Input | Receipt Field Description | Purpose of Field | Linked | | --- | --- | --- | --- | --- | --- | --- | --- | | PI attributes | attributes name | attribute | {text=attribute value} | multiple PI attributes can be added to a purpose category | used to map technical scope | not linked externally | | 25 | PI Attribute(s) | N/A | N/A | OPTIONAL | OPTIONAL | OPTIONAL | | 26 | PI Confidentiality Level | OPTIONAL | OPTIONAL | OPTIONAL | OPTIONAL | OPTIONAL | | 27| Sensitive Information Category | N/A | MUST NOT | MUST | MUST | | 28 | Sharing Purpose | OPTIONAL | MUST | | | | | 29 | Sharing Contract/Policy | OPTIONAL | OPTIONAL | OPTIONAL | OPTIONAL |

6.3 Consent Receipt v2.1 for Compliant Consent Receipts (TBF)

Mapping regulation to receipt notice, function, policy and trust frameworks.

6.4 ISO Terms - mapping and use in the Consent Receipt specification ISO/IEC 29100:2011 is applicable to natural persons and organizations involved in specifying, procuring, architecting, designing, developing, testing, maintaining, administering, and operating information and communication technology systems or services where privacy controls are required for the processing of PII." (ref- FIPPs and (ISO Principles - "Openness, transparency, notice") and Consent (ISO Principle 1 - "Consent and Choice") are fundamental privacy principles, addressed with this specification. (editors note: - how should this be referenced and linked? )

6.5 Consent Logging Requirements for sensitive personal data require the logging of consent changes, explicit consent, that is machine readable.

As a result, iterative changes or consent preferences can be recorded on consent transaction level and with consent based change management, as long as it is linked to the original consent, and iteratively logged.
