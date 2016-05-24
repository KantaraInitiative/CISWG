# Consent Receipt: for a Consistent Record of Consent #

| Document Information  | |
| ------	| ------	|
| Version: | 1.0 Draft 0.7.9 |
| Date: | April 18, 2016 |
| Editors: | Mark Lizar |
| | Heather Flanagan  |
| Contributors: |
| |	John Wunderlich |
| |     Justin Richer   |
| |     Mary Hodder     |
| |     Iain Henderson  |
| |     Sarah Squire    |

# Abstract

This specification identifies the consent requirements necessary to record consent for a personal information sharing transaction and provide this record as an independent receipt.  Much like a transaction receipt mapped the price of a product or service to payment. The receipt effectively maps and links the legal, social and contextual elements to a record of consent.

As a result the consent receipt not only opens consent for people, but it also provides proof of consent and enables consistent consent practices.   The  consent receipt is required to be provisioned at point of consent to the person providing consent.  

By putting the individual at the centre of consent this specification addresses FIPPs and ISO Principles - "Openness, transparency, notice") and Consent (ISO Principle 1 - "Consent and Choice")

A consent receipt and a common format for recording and communicating about consent establishes a framework to bind policy to privacy controls that people can themselves administer.  Operationally demonstrating compliance with multiple Fair Information Practice Principles and likewise map PII management to ISO 29100 privacy framework.

# Status of this document
The v0.8 draft is a  Consent Receipt v.1 specification candidate - this draft version is for peer review and not meant for distribution.

## Copyright Notice
Copyright (c) 2016 Kantara and the persons identified as the document authors. All rights reserved.

This document is subject to the [Kantara IPR Policy - Option Patent & Copyright: Reciprocal Royalty Free with Opt-Out to Reasonable and Non-discriminatory (RAND)](https://kantarainitiative.org/confluence/download/attachments/2293776/Kantara%20Initiative%20IPR%20Policies%20_V1.1_.pdf?version=1&modificationDate=1244488630000&api=v2)[HTML version](https://kantarainitiative.org/confluence/pages/viewpage.action?pageId=41025689)

## Table of Contents
1. Objective
2. Scope
* 2.1. Not in Scope
3. Notational Conventions For Conformance
4. Terminology
5. Consent Receipt v.1
* 5.1 Global Guidance
* 5.2 Consent Receipt v.1 EXAMPLE
* 5.3  Conformance Field Table
* 6. Appendix A: Consent Receipt (CR) v2 Sensitive PI: Conformance and Compliance
* Consent Receipt v2 SENSITIVE Personal Information
* Consent Receipt v2.1 COMPLIANT Consent (TBF)
* ISO Terms - mapping and use in the Consent Receipt
* 7. Appendix B: Consent Type
* 8. Appendix C: Purpose Categories (or purpose type)
* 9. Appendix D: JSON Example and Demo V0.7 Consent Receipt Generator
* 10 Appendix E: Kantara Implementation Use Case

## 1.Objective
This specification identifies the common consent requirements to record and provision an independent record of consent in the form of a receipt to the individual.

### 2. Scope
This scope includes how to present the receipt fields in a receipt, the timing of the record, linking fields to external information, how to present the record fields, the data_type and order of fields.

Viable, in this scope, means a record of consent that can be retained and used separately by both issuer (PI Controller) and recipient (PI Principal) as proof of consent.

The term 'minimum' in the MVCR refers to the least amount of fields required to make a viable consent receipt  online.

### 2.1 Not In Scope
The MVCR conformance profile is intended to provide flexibility for implementation and easier adoption by not having the burden of explicit legal compliance obligations for the implementor.  The MVCR v1 is not to be used for specifying sensitive personal data as these requires explicit legal reference.  (see Appendix A for a summary of spec work in development)

* The extensions for conformance to sensitive PI laws and to standards  are at various levels of spec review and testing by the WG.  (see Appendix A for a summary of spec work in development)

* v0.8 (this draft) meets the requirement of providing a baseline Consent Receipt, while also enabling the development of a consistent 'consent framework' for personal data control.

### 3. Notational Conventions for Conformance ###
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](http://www.rfc-editor.org/info/rfc2119).

### 4. Terminology ###
Terminology herein leverages where possible,  [ISO/IEC 29100:2011 "Information Technology -- Security techniques -- Privacy Framework"](http://standards.iso.org/ittf/PubliclyAvailableStandards/c045123_ISO_IEC_29100_2011.zip).

* **PI Sharing**
A statement or series of statements that set out what information is shared with third parties and for what purpose(s).

* **Consent Notice**
 Refers to a notice that is required to inform the consentor what they are consenting too, without it consent is not possible, the quality and usability of the consent notice is what is often used to classify if a consent is legally informed or not, but this varies by jurisdiction context and interpretation.  Consent notices can vary from icons, short notices, direct communication, visceral notice and most often online a policy like terms of service and privacy policy.

* **Consent Receipt (CR)**
A record of a personal information consent transaction provided to the PI Principle at the time of Consent.

* **Explicit Consent**
Refers to explicit action taken by users in which consent is expressed, but, it is also in reference to explicitly stated purpose.  I.e. A box was ticked, or an 'I agree' button pressed in relation to listed purpose or purpose category. In this specification, explicit elements can be extended i.e. by an explicit reference to  authoritative policy and operational scope.

* **Non-Explicit Consent**
(includes self-asserted and externally defined consent type), MVCR Lite Mode demonstrates   receipt  conformance with the MVCR, but is limited to conformance, and makes no compliance claims, but can demonstrate conformance with MVCR using defined consent types.

* **Explicit Consent Reference**
Is best described as a directly linked field  to a function, law, or authoritative policy ; consent regulation, privacy principles, other consent standards, or industry best practices.

* **Express Consent**
Refers to the context of a PI Principal making an un-ambigous agreement  to consent.  It is conceivable, in the context of this specification, that a consent can be  expressed  and contain explicit consent references to also be compliant  (see council of Europe 5.4.4 https://goo.gl/JGPX2Y)

* **Explicit Purpose:**
A term used to reference how a purpose is specified,  each purpose is contained in a purpose category and is  explicit if it coincides with a consent for that specific purpose category.   i.e.  a  single purpose with a single check box.

* **Explicit 3rd Party Sharing:**
The degree that sharing is specified can be explicit.  In the specification, the sharing purpose category SHOULD be listed, as well as the the third party at a minimum. But, this can further be explicitly specified with options that include sharing contract, preference, and termination fields, which are beyond minimum requirements.

* **Individual**
see PII Principal in ISO/IEC 29100:2011.

* **Minimum Viable Consent Receipt (MVCR)**
Is a record of consent provided to the person providing consent for personal information sharing as a receipt.

* **OPT-OUT Consent**
An example of 3 types of consent currently defined. Opt-Out is implied consent mechanism online that is used for an array of purpose specifications.

* **Personal Information (PI)**
Information that is personal but not identifiable.  This includes IP addresses, projected consent preference (like DNT)
browser fingerprint, and any personal metadata, which the user controls that is not identifiable.

* **Personally Identifiable Information (PII)**
Personally identifiable information (PII), is defined in ISO/IEC 29100:2011.  The abbreviation PII is widely accepted in OECD base FIPPs jurisdiction, but the phrase it abbreviates has four common variants based on personal / personally, and identifiable / identifying. Not all are equivalent, and for legal purposes the operational definitions can vary depending on the specific purposes for which the term is being used. the term used more often is "personal information", which may be somewhat broader.

"4.4 : To determine whether or not an individual should be considered identifiable, several factors need to be taken into account. In particular, account should be taken of all the means which can reasonably be used by the entity holding the data, or by any other party to identify that individual on the basis of the given information."  From ISO:29100, additional clarification available ...

"Treatment of PII is distinct from other types of data because it needs to be not only protected, but also collected, maintained, and disseminated in accordance with Federal law." NIST 800-222

* **PI Principal**
Natural person to whom the PI relates, is used for explicit consent in which the person is identified with the field 'Principal ID'. This is the primary identifier for linking automatic processing to a persona, and/or collection of attributes provided at point of consent, which are used to identify the PI Subject are shared.  See PII Principal in in ISO/IEC 29100:2011, also data subject (EC directive), consenter, PII PRINCIPLE in NIST 800.

* **PII Confidentiality Impact Levels**
Defined by low, medium, high or not applicable confidentiality; which correspond to NIST controls sp800-122 and can be use for the organisation, the individual and the developer to ascertain on scale the level of risk and security required.

* **Purpose Specification**
A statement or series of statements that set out the purpose(s) for which PII has been collected.  In the MVCR the purpose is intended to specify the context of use.

* **Context of Use**
Organisations should evaluate the context of use to provide the purpose for which the PI is collected, stored, used, processed, disclosed, or disseminated.  The context of use may cause the same PI data elements to be assigned different PII confidentiality impact levels based on their use.  For example, suppose that an organization has two lists that contain the same PI fields (e.g., name, address, phone number).  The first list is people who subscribe to a general-interest newsletter produced by the organization, and the second list is people who work undercover in law enforcement.  If the confidentiality of the lists is breached, the potential impacts to the affected individuals and to the organization are significantly different for each list.

* **Sensitive Personal Information (SPI) Categories**
(TBF)

* **Sensitive PI Categories**

This is a common list of sensitive PI categories, although, their are additional categories for different jurisdictions, and different interpretation of some categories, we have provided a common list and the option to add a specifically defined Sensitive PI type.

  * Health
  * Financial
  * Child Data
  * Location
  * Biometric
  * Official Identifiers
  * Psycho/Social/Belief
  * Membership to Union
  * Other

## 5. Consent Receipt Guidance

The Consent Receipt inherently, by being a record of consent, provides proof of consent and delivers contact information to communicate about consent directly to the end user.  These properties alone meet and exceed many of the existing legal requirements that are in place for consent, notice and choice.  Unless the consent is for sensitive personal information, which is highly regulated and contextualized. (See Appendix A: sensitive personal information)

* Providing a consent receipt constitutes proof of consent.
* The act of provisioning a receipt with valid and proportionally linked contact information is what effectively opens consent and makes a viable consent receipt.
* The receipt can be provisioned in any manner that is feasible or expected in according to the context.
* Proportionally refers to the context (or medium) of the consent, method of collection, and to how the fields are linked
* All of the record fields should be presented with the consent receipt label fields on the receipt which is viewable by the receipt recipient.
* If it is verbal (aka a Handshake), then a written consent receipt with a phone number to the PII Controller is sufficient to make a minimum viable  consent receipt for that context.
* If it is an online consent, for instance a website PI form, then additional (SHOULD) fields become a (MUST) in order to verify the claims in the CR.  For instance jurisdiction is not required in person.
* Different context have different expectations, and these expectations should be documented and managed by policy and reflected in the receipt.
* Basic receipt is ideal for not only proof of consent but dynamic consent, optional extensibility for making consent more explicit and enable users to withdraw consent preferences.

### 5.1 Consent Receipt (CR) v.1
This baseline Consent Receipt profile is for digital receipt conformance  which is intended to make a consistent receipt and to provide people with this receipt as to make the consent Open in both; as a common format and common practice.  As a result it is a requirement that the individual have a record of the consent. The receipt can be used by the individual to validate, communicate and manage the consent after consent is provided.

### Consent for Information Sharing
The baseline digital consent receipt is designed to make it easy to specify consent for PI sharing.

###  Consent Receipt V.1 (Minimum Viable Consent Receipt)
The specification process is used to create online/digital consent receipts that provides transparency over personal data control.  The CR is the end result of using this open specification for dynamic consent preferences and proof of consent.  Consent Receipt v2 is the extension of Consent Receipt v1 for processing sensitive personal information and providing consent receipts with compliance claims that map to standards and regulations.

The Consent Receipt V.1 is for a digital consent receipt for personally identifiable information (PII) and includes fields that are used to define consent and sharing of personal information (PI) with more granularity  to enable communication between PI Principle and PI Controller.

The Consent Receipt provides baseline guidance for digital and networked consent.  The baseline is comprised of MUST'S and SHOULD'S, OPTIONAL, REQUIRED, etc, that are used to illustrate Conformance with the Consent Receipt being open and usable digitally.

Open Consent is achieved by :
* 1. Providing Proof of Consent in form of a dated Consent Receipt with purpose specified
* 2. PI Controller contact details to the PI Principal to communicate about, and manage, consent once it is provided.

Contact information MUST be proportionate to the method of collection and directly linked so as to be appropriately accessible in the context of consent provision for validation by the recipient.

Without providing the categories of sensitive data collected, the Consent Receipt has a low risk of liability and provides enhanced consent once implemented.  The Consent Receipt V.1 is not intended for regulatory compliance or for sensitive personal information without explicit reference.

* Baseline Consent Receipt for digital consent (see Kantara Beta Signup)[https://enterhere.com/]
* Context can vary widely depending on the METHOD of Collection and the sensitivity of the PI.

* | __MUST__ | - Date & Time, Jurisdiction, Principal ID, Collection Method, PI Controller, Linked Contact, Linked PP, Purpose Termination, Core Purpose, Consent Preference, Consent Type,
* | __SHOULD__ | -  Service Name, PI Sharing Y/N, Purpose Category,
* | __OPTIONAL__ | Sensitive PI Y/N, PI Categories, Purpose Preference, Confidentiality Level, Sharing Purpose, Sharing PI Controller Contact, Sharing, Scope(s)
* | _MUST NOT_ | Sensitive Personal Information Categories |

##### V1 Consent Receipt Example

#####  Header Example

| Field | Contents|
| ------:	| ------	|
| __Jurisdiction:__ | CA |
| __Consent Time Stamp:__ | 2016/02/08 12:20:34 EST |
| __Collection Method:__ | web form | [http://www.consentreceipt.org](http://www.consentreceipt.org) |
| __Consent ID:__ | C159A448-A69B-44BF-BFCE-6403FB5D06EE |
| __Principal ID :__ | [new@member.com](mailto:new@member.com) |
| __Sensitive:__| N |

##### PII Controller Data Example ####
| Field | Contents|
| ------:	| ------	|
| __Data Controller:__ | Kantara Initiative |
| __On Behalf :__ | null |
| __Contact Name:__ | DPO-Consent Kantara |
| __Contact Address:__ | 401 Edgewater Place, Suite 600, Wakefield, MA  01880,  |
| __Contact Email:__ | [dpo@kantarainitiative.org](dpo@kantarinitiative.org) |  | __Contact Phone:__ | |
| __Contact Other:__ | Fax +1 781-623-3094 |
| __Privacy Policy:__ | [Privacy Policy](https://kantarainitiative.org/confluence/display/GI/Privacy+Policy) |

#### Purpose List & PII Example List ####
| Service | Purpose | _PI Category_ | _Consent Type:__ | Purpose Category | Purpose Preference | Purpose Termination |
| ------ | ------ | :------: | :------: | :------: | :------: | :------: |
| CISWG | Authority to sign Participation Agreement | Biographical, Address | Explicit | Sign up for Work Group | NO | Link to Policy |
| CISWG | Voting Status | Explicit | Yes  | Voting | Yes | |
| CISWG | Agree to IPR Policy | Explicit |  when leave location  | NO | | |

#### PI Sharing Example
| Service | Third Party | Type of Consent to Share | What is Shared | Sharing Purpose | Termination |
| ------ | ------ | :------: | :------: | :------: | :------: |
| Kantara Website | Google analytics, |  implied | Website Access | non PII | link to Google Policy |
| CISWG WIKI |  Public |  Implied | Email, Name Affiliation | workgroup membership | link to membership termination |

####  Scope Example
| Scope  | Purpose | PI Category | Scope Reference (linked) | Scope Description | Confidentiality |
| ------ | ------ | :------: | :------: | :------: | :------: |
| Technical | create account | biographical |   administration  |  CISWG member account  | Low |
| Policy | Consent to transfer data to US | biographical | administration | CISWG Member Account | Low |

## 6. Consent Receipt Fields

The Consent Receipt is broken down into 6 sections for development usability and to aid in understanding the core functions.

The 6 sections are:

1.	Consent Receipt Header
2.	PI Controller Information
3.	Purpose Specification
4.	Personally Identifiable Information
5.	Information Sharing
6.	Scope(s)

### 5.1 Header

The purpose of this section is to set out administrative fields for the consent transaction. This section contains the following fields:

| Receipt Field Label | Receipt Field Format | Data Field Name | Data Type | Example Data Input | Receipt Field Description | Purpose of Field  | Linked |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jurisdiction | Country and if state/prov if applicable | jurisdiction | string. | US  | ISO two-letter country code if applicable, otherwise free text  | to facilitate compliance requirements |  Not Linked |
| Consent Time Stamp | military time | iat | number. Integer number of seconds since 1970-01-01 00:00:00 GMT | 1435367226 | Date and time including time zone, or in UTC that consent was granted  for operational use | for logging consent record | Not Linked |
| Consent Type | title of type model | type | ? (string) | field is used for adding non-explicit consent implied or delayed - or explicit | model consent expectations | Link Optional |
| Collection Method | short 2-3 word description | moc | Method of collection | web form | A description of medium in which the consent was collected | compliance, context of consent | Linked to  location/description of consent  |
| Consent ID | # |  jti |  A unique identifier for the consent receipt | C159A448-A69B-44BF-BFCE-6403FB5D06EE |  A globally unique ID (GUID) | for proof of consent authentication | Not Linked |
| PI Principal ID | email address, picture, device id,  | sub | string | alice@domain.com | Subject provided identifier, email address - or Claim, defined/namespace | required for proof of consent claim | not linked |

### 5.2 PII Controller Information

This section identifies the individual and company that is accountable for data protection and the privacy policy to which the consent is bound.

| Receipt Field Label | Receipt Field Format | Data Field Name | Data Type | Example Data Input | Receipt Field Description | Purpose of Field  | Linked |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PII Controller | Name of processing entity | controller | object | {"on_behalf": true, "contact": "Dave Controller", "company": "Data Controller Inc.", "address": "123 St., Place", "email": "dave@datacontroller.com", "phone": "00-123-341-2351", "other": }  | name of the data controller | used to identify controller  | linked to controller record or domain |
| On Behalf | yes or no | on_behalf | boolean | true | used to identify the delegate of PI Processor entity acting on behalf of stated organization | used to identify processor if different than controller  | linked |
| Contact Name| [First & Last Name] | contact_name | Jon Doe | contact of pi controller who is processing data | to identify name of personal responsible in accordance with requirements |not linked |
| Contact Address | house #, st, place, country, post code | Physical Address | address | "123 St., Place" | physical address of PI controller | to ascertain location and jurisdiction of responsible entity |  Linked to copy/paste address |
| Contact Email | Email Address | email | string. Email address | jon@datacontroller.com | contact email address | contact in context of consent to manage consent preferences | linked to email address |
| Contact Phone | Phone Number | phone | string. Phone number |  00-000-000-0000 | contact phone number |  a contact field  | Linked |
| Contact Other | Free text | contact_other | string | @twitter | a contact field  |  for social media or other communication channel | Linked directly to communication channel where possible |
| Privacy Policy | Link to policy | privacy_policy |  http://link.com/privacypolicy | is a link to the current privacy policy |  can be captured and attached to receipt |  Linked |

### 5.3 Purpose(s)

This section specifies the purpose(s) for which the PI Controller is collecting PI

| Receipt Field Label | Receipt Field Format | Data Field Name | Data Type | Example Data Input | Receipt Field Description | Purpose of Field  | Linked |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Service Name | name of service | up to three words | service | "string" | marketing | the name of the service that requires personal information  | used to identify context of purpose | Optional Linked to a description of the service - or icon  |
| Purpose | Description of purpose | Required | Should be explicit and specific as reasonably necessary to fulfill the Service |
| Purpose Category | short description | purpose_category | string | for marketing | The primary purpose will be necessary, but may not be the only necessary purpose. PII subject should be able to provide consent directives to opt out of purposes not identified as necessary . |
| Purpose Preference (Y/N) |  preference | preference | yes | this is a yes no flag | for indicating if this purpose is required or  a secondary purpose separate from the main operational purpose | linked to preference management settings |
| Purpose termination | termination | limits | string |  {duration for current location} {1 day must delete } | conditions for the termination of consent purpose, or withdraw of consent | linked to policy |

**Note:** A list of commonly used purposes is provided in Appendix B below.

### 5.4 Personally Identifiable Information

This section specifies personal information categories, attributes, PII confidentiality level, PII Sensitivity for the purpose of explicit personal data tracking.  (Note: Sensitive Information Category is used for Compliance Specification)

| Receipt Field Label | Receipt Field Format | Data Field Name | Data Type | Example Data Input | Receipt Field Description | Purpose of Field  | Linked |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PI Categories |text | pi_category | string |  address | short description of personal data | to classify PI attributes | linked to framework definition of category |
| PI Confidentiality Level | {low, medium, high, N/A } | con_level | string | low | confidentiality risk level | for security considerations based on purpose and attribute exchange | not linked |
| Sensitive Data Y/N | text | yes or no | sensitive | string | Yes | indicates if data is sensitive or not sensitive | used to indicate if consent categories: (see sensitive categories) | should be linked to a notice about what is sensitive |
| Sensitive Information Category | list of categories with check boxes | sic | string | "Health" | used in the specification to indicate further notice  requirements are needed and the receipt has compliance claims | not linked |

### 5.5 PI  Sharing (TBF)

The purpose of this section of the consent receipt format is to provide the PI Principle with information about how their information is shared with third parties. In the MVCR this is a Y/N (binary on and off) flag, and if On, then the 3rd parties can be specified, using purpose and at the minimum the purpose categories for the sharing of PI.

| Receipt Field Label | Receipt Field Format | Data Field Name | Data Type | Example Data Input | Receipt Field Description | Purpose of Field  | Linked |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PI Sharing Y/N|  Sharing "" | sharing | string | YES | a yes no flag that indicate if PI is being shared | indicate if sharing is occurring for the purposes specified in the receipt | not linked |
| Third Party | Name of Organisation (shared publicly)(Text) | 3rd_party | string | Bob's Website | Third party that receives the PI | to identify data controller and purpose | SHOULD be Linked |
| Sharing Purpose | select from existing purpose or purpose category field input |  sh_purpose | string | core service | to identify reason for sharing | not linked |
| Sharing Purpose Category | select from existing purpose category field input | sh_purpose_cat | string | core service | to identify expectation  for sharing | not linked |
| Termination of Sharing | | | |
| Sharing contract/policy | | | |

###  Scope(s)
|  Scope |  scope name | PI Category | PI Purpose |  PI Preference | Permission | Data Type | Example  Data Input | Scope Description | Scope Purpose  | Linked |
| --- | --- | --- | --- | --- | --- | --- | --- | -- | -- |
| Technical/Legal | withdraw consent |  marketing | PI sharing | YES | {purpose preference string} | data@subject.com, consent id, principal ID, purpose preference, terminate | technical scope | to terminate consent preference | linked to preference in profile |

# 5.4  Conformance Table

This  table specifies requirements to fulfill conformance for each mode as defined. MVCR is for all types of implied and mixed consent contexts.
Sensitive MVCR is for sensitive personal information, which require explicit consent
COMPLIANT MVCR is for specific privacy controls as defined by regulation and/or policy

| Field # | Field Name | Open Consent: Receipt v0.7 | Consent Receipt v1 | Sensitive v2 | COMPLIANT v2.1 (UK Profile)|
| ------ | ------ | -----| :------: | :------: | :------: |
| 1 | _Jurisdiction_ | SHOULD | MUST | MUST | MUST |
| 2 | _Consent Time Stamp_ | MUST |   MUST | MUST | MUST |
| 3 | Sensitive Data Y/N | SHOULD | SHOULD | MUST | MUST |
| 4 | _Collection Method_ | SHOULD | MAY | MUST | MUST  |
| 5 | _Consent ID_ | SHOULD | MUST | MUST |  MUST |
| 6 | _PI Principal ID_ | MUST | MUST | MUST | MUST|
| 7 | _PI Controller_ | MUST | MUST | MUST | MUST |
| 8 | _On Behalf_ | MUST | MUST | MUST | MUST |
| 9 | _Contact Name_ | SHOULD | SHOULD | SHOULD | SHOULD |
| 10 | _Contact Address_ | MUST 1 of 9-13 | SHOULD | MUST |
| 11 | _Contact Email_ | MUST 1 of 9-13 | MUST | SHOULD |
| 12 | _Contact Phone_ | MUST 1 of 9-13 | SHOULD | MUST |
| 13 | _Contact Other_ | MUST 1 of 9-13 |  OPTIONAL |  OPTIONAL |
| 14 | _Privacy Policy_ | MUST |  MUST | MUST | MUST |
| 15 | Service | SHOULD | MUST |  MUST | MUST  | MUST |
| 16 | Link to Purpose | OPTIONAL | OPTIONAL | MUST | MUST | SHOULD |
| 17 | Purpose Category |SHOULD | MUST | MUST | N/A |
| 18 | _Consent Type_ | SHOULD | MUST | MUST | MUST |
| 19 | Purpose Preference (Y/N) | OPTIONAL | OPTIONAL | OPTIONAL | OPTIONAL |
| 20 | Purpose Termination/Duration/Renewal | OPTIONAL | OPTIONAL | OPTIONAL | OPTIONAL |
| 21 | PI Category | MUST | MUST | MUST | MUST | MUST |
| 22 | PI Sharing Y/N | SHOULD | MUST | MUST | MUST |
| 23 | Third Party | SHOULD | SHOULD | SHOULD | SHOULD |
| 24 | Scope(s) | OPTIONAL | OPTIONAL | MUST | MUST |

## Appendix A: Consent Receipt Extensions

The MVCR (Minimum Viable Consent Receipt) is a process used to create consent receipts that puts people in the control of personal data.  The Consent Receipt is the resulting specification for utilizing this process for creating an open standard candidate for dynamic consent and proof of consent. Consent Receipt v2 is the extension of Consent Receipt v1 and focuses on the processing of sensitive personal information and v2.1 focus on consent receipts with compliance claims, that map laws and notices to demonstrate compliance.

Extending the Consent Receipt involves adding more specific detail. The Consent Receipt v.1 is used to create receipts for sensitive personal information (CR v2 Appendix A) or for COMPLIANCE with an explicit Consent Receipt (v2.1 Appendix A), all of these profiles are then useful to specify more granular operational policy and technical SCOPE(s) of consent for information sharing (if required).

Consent Receipt (CR) v2 Sensitive PI: Conformance and Compliance

Consent Receipt V.1 provides the

6.2 Consent Receipt for SENSITIVE Personal Information (TBF)
Additional Fields Proposed 
| Receipt Field Label | Receipt Field Format | Data Field Name | Data Type | Example Data Input | Receipt Field Description | Purpose of Field | Linked |
| --- | --- | --- | --- | --- | --- | --- | --- | 
| PI attributes | attributes name | attribute | {text=attribute value} | multiple PI attributes can be added to a purpose category | used to map technical scope | not linked externally | 
| 25 | PI Attribute(s) | N/A | N/A | OPTIONAL | OPTIONAL | OPTIONAL | 
|26 | PI Confidentiality Level | OPTIONAL | OPTIONAL | OPTIONAL | OPTIONAL | OPTIONAL | 
| 27| Sensitive Information Category | N/A | MUST NOT | MUST | MUST | | 28 | Sharing Purpose | OPTIONAL | MUST | | | | 
| 29 | Sharing Contract/Policy | OPTIONAL | OPTIONAL | OPTIONAL | OPTIONAL |

6.3 Consent Receipt v2.1 for Compliant Consent Receipts (TBF)

Mapping regulation to receipt notice, function, policy and trust frameworks.

6.4 ISO Terms - mapping and use in the Consent Receipt specification ISO/IEC 29100:2011 is applicable to natural persons and organizations involved in specifying, procuring, architecting, designing, developing, testing, maintaining, administering, and operating information and communication technology systems or services where privacy controls are required for the processing of PII." (ref- FIPPs and (ISO Principles - "Openness, transparency, notice") and Consent (ISO Principle 1 - "Consent and Choice") are fundamental privacy principles, addressed with this specification. (editors note: - how should this be referenced and linked? )

6.5 Consent Logging Requirements for sensitive personal data require the logging of consent changes, explicit consent, that is machine readable.

As a result, iterative changes or consent preferences can be recorded on consent transaction level and with consent based change management, as long as it is linked to the original consent, and iteratively logged.
## 7. Appendix B: Purpose Categories

The list below contains a list of purposes for which Personally Identifiable Information (PII) has been collected, based on input from subject matter experts. This list is neither normative, in that none of these are required purposes in any given context, nor complete, in that each purpose for each collection by each entity is contextually specific. This list is provided for convenience and demonstration purposes. It is the case that in many jurisdictions, the entity collecting PII for identified primary purposes may not use that same information without the consent of the PII Subject for secondary purposes, unless required to do so by law, and it is the case that the PII Subject should be able to deny consent for secondary purposes while still receiving core functions from the site, application or service.

| # | Description | Short Code | Notes |
| --- | --- | --- | --- |
| 1. | To enable the entity to carry out the core functions of its site/app/services. | _Core Function_ | Default Purpose |
| 2. | To provide contracted or requested services to the PII Subject. | _Contracted Service_ | |
| 3. | To deliver contracted or requested services to the PII Subject. | _Delivery_ | |
| 4. | Communicating with you about information or services you specifically request. | _Contact Requested_ | |
| 5. | Providing you with a personalised experience of our site/app/service. | _Personalized Experience_ | |
| 6. | Communicating with you about our other services you may be interested in. | _Marketing_ | |
| 7. | Communicating with you about the services of third parties you may be interested in. | _Marketing Third Parties_ | |
| 8. | Providing the information to third parties to deliver our services on our behalf. | _Sharing for Delivery_ | |
| 9. | Providing the information to third parties to enable them to communicate with you about their own services you may be interested in. | _Sharing for Marketing_ | |
| 10. | Providing the information to third parties to enable them to deliver or improve their own services to you. | _PI  Sharing for Core Function_ | |
| 11. | Providing the information to third parties to enable them to deliver or improve their own services to others. | _PI Sharing for ..._ | |
| 12. | Complying with our legal obligations for record keeping. | _Legally Required Data Retention_ | |
| 13. | Complying with our legal obligations to provide the information to law enforcement or other regulatory/government bodies. | _Required by Law Enforcement or Government_ | |
| 14. | Protecting your vital and health interests. | _Protecting Your Health_ | |
| 15. | Protecting our legitimate interests, yours or those of a third party. | _Protecting Our Interests_ | |
| 16. | Measure or improve our performance or the delivery of our services. | _Improve Performance_ | |

Other purposes may be uses as appropriate for the specific context of each jurisdiction and the site, application or service.

## 4.3. Appendix C: Categories of Personal Data (explainers/examples only)

- 1.	Biographical – (General information like Name, DOB, Family info (mother’s maiden name), marital status. Historical data like educational achievement, general employment history.)
- 2.	Contact – (Address, Email, Telephone Number, etc.)
- 3.	Biometric – (Photos, fingerprints, DNA. General physical characteristics – height, weight, hair colour. Racial/ethnic origin or identification - whether self-identified or not)
- 4.	Communications/Social – (Email, message and phone records – both content and metadata. Friends and contacts data.)
- 5.	Network/Service – (Login ids, usernames, passwords, server log data, IP addresses, cookie-type identifiers)
- 6.	Health – (Ailments, treatments, family doctor info. X-rays and other medical scan data)
- 7.	Financial – (This includes information such as bank account, credit card data. Income and tax records, financial assets/liabilities, purchase/sale of assets history.)
- 8.	Official/Government Identifiers – (This includes any widely recognised identifiers that link to individual people. Examples include National Insurance, ID card, Social security, passport and driving license numbers, NHS number (UK). Just the numbers rather than data associated with them.)
- 9.	Social Services/Welfare – (Welfare and benefits status and history)
- 10.	Judicial – (Criminal and police records, inc. traffic offenses.)
- 11.	Property/Asset – (Identifiers of property – license plate numbers, MAC addresses for mobiles, other device identifiers. Not financial assets. Could include digital assets like ebook and digital music data)
- 12.	Human Resources – (Records held about employees/ members/ studentsP not elsewhere defined. Incl. HR records such as job title, attendance/disciplinary records. Salary - as opposed to income.)
- 13.	Psychological/Attitudinal – (Inc. religious, political beliefs, sexual orientation and gender identity – though not genetic gender which is Biometric. Traits and personality measures or assessments, but not psychological health - which is health data).
- 14.	Membership – (Political, trade union affiliations, any other opt-in organisational/group membership data - third party organisations only. Includes name of employer when not held by employer. Could extend to online platform membership. Some might be more sensitive than others – may want a separate category)
- 15.	Behavioural – (Any data about the behaviour, habits or movements of an individual - electronic or physical. Location, browser/search history, web page usage (analytics), energy usage (smart meters), login history, calendar data, etc.)

## APPENDIX D ### JSON Demonstrator:  (editors note: normative for MVCR ALPHA V0.7 ) - update required)
JSON example used for testing and developing conformance v0.7 to v0.8

A demonstration version of the MVCR can be found on the [Example Consent Receipt Generator (CRG)](https://mvcr.herokuapp.com/) page. The example site also contains [API documentation](https://mvcr.herokuapp.com/doc/). This server contains a consent receipt generation API. The API consists of a single endpoint at [http://www.consentreceipt.org/mvcr/api](http://www.consentreceipt.org/mvcr/api). This endpoint accepts HTTP POST requests with input in the form of JSON (application/json) documents and returns output in the form of a signed JSON Web Token (application/jwt). The example site consists of two pages:

* The Consent Receipt Generator Input Example and Receipt Rendering page at which users can experiment with inputs and see the corresponding output. This may be used to help develop implementations and see how the consent receipt code is working. The code for this page can be found at [https://github.com/bspk/cr_web](https://github.com/bspk/cr_web).

* A page for API Documentation and examples at [http://api.consentreceipt.org/doc/](http://api.consentreceipt.org/doc/)

The API takes in a JSON document describing the consent transaction for which the receipt is to be generated. This object includes artifacts such as the presiding jurisdiction for the consent action, an identifier for the party consenting. The output of the API is a signed JSON Web Token (JWT) whose payload consists of all of the input data as well as several additional fields. The output JWT is signed by the server using the RS256 algorithm defined in JSON Web Signatures. The server's public key is published in JSON Web Key format at: http://www.consentreceipt.org/api

### JSON Field Table
This is included above as column for all fields. But data fields are optional.

The following table sets out the fields contained in a JWT that meets the information requirements for a Minimum Viable Consent Receipt.

| Field Name | Data Type | Description | Example Input |
| :---: | --- | --- | --- |
| Section 1: CR Header | | This is the first section of the receipt | |
| jurisdiction | string. ISO two-letter country code if applicable, otherwise free text | This is the jurisdiction that governs the PII Controller | US |
| iat | number. Integer number of seconds since 1970-01-01 00:00:00 GMT | Timestamp of when the consent was issued | 1435367226 |
| moc | Method of collection | Is used to describe how the consent was collected i.e. webform opt in, or implicit, verbal, etc. | web form |
| iss | string. HTTPS URL | This is the URI or Internet location of processing, i.e., one party-two party or three | http://www.consentreceipt.org/ |
| jti | string | Unique identifier for this consent receipt | 9ef6b81a414b2432ec6e3d384c5a36ce-a8aa0c30d3dd2b67364126ed80856f9c-20654f032eef87ad981187da8c23c118-6eefe1503714835c2e952bbb3f22729c |
| sub | string | PII Subject provided identifier, such as an email address, user ID or a claim, defined with a namespace | example@example.com |
| Section 2: PII Controller | | This section has the PII Controller, contact and privacy service information | |
| data_controller | object | The identity and company of the PII controller and any party delegated to be a PII processor on behalf of the PII controller | {"on_behalf": true, "contact": "Dave Controller", "company": "Data Controller Inc.", "address": "123 St., Place", "email": "dave@datacontroller.com", "phone": "00-123-341-2351"} |
| Section 2: data controller object fields | | | |
| on_behalf | boolean | acting on behalf of an organization? | TRUE |
| contact | string | Person to contact | Jon Doe |
| company | string | Company name | Data Controller Inc. |
| address | string | Physical address | 123 Main St., Anywhere |
| email | string | Contact email address | jon@datacontroller.com |
| phone | string | Contact phone number | 00-000-000-0000 |
| end of object fields | | | |
| policy_uri | string HTTP URL | The internet and immediately accessible privacy policy of the service referred to by the receipt | http://www.example.com/privacy |
| Section 3: Purpose Specification| | List Purposes| |
| purpose | array of string's arrays| Explicit, Specific and Legitimate: interpreted here as: 'Naming the Service' and 'Stating the Active Purpose ' see Appendix B for these requirements| [Bob’s store, delivery, ]or [[" CISWG Membership", "Join"]] |
| Section 4: Sensitive Personal Information | | Identify sensitive PII | |
| sensitive | array of strings | In many jurisdictions their are additional notice and administrative requirements for the collection, storage and processing of what are called Sensitive Personal Information Categories. These are Sensitive in the business, legal, and technical sense, but not specifically in the personal context. This list of categories are required in some jurisdiction, but, the actual notice and purpose requirements are out the scope of the MVCR. | ["health"] |
| Section 5: Information Sharing | | Sharing information with 3rd parties, what categories, with whom, and how information is shared | |
| sharing | object | | |
| Section 5 object fields | | | |
| sharing| array of strings| Data categories to share | None |
| party_name | string | 3rd party to share data | 3rd Party name or 3rd Party Category | |
| purpose| string | How information is shared | None |
| Section 6: Optional or In Review | | | |
| notice | string. HTTP URL | Link to the short notice enables usability and layered policy. to provide enhanced transparency about data collection and information sharing practices | [http://example.com/shortnotice](http://example.com/shortnotice) |
| scopes | string. space separated string values | What you’re allowed to do on the service (these can be tied to legal / business / technical layers) | read update |

**Note:** Table incomplete. See [https://mvcr.herokuapp.com/doc/](https://mvcr.herokuapp.com/doc/)
- 16.	Profile – (Marketing and social segmentation data. Any categorisation that impacts information presented or decisions made about an individual. This might be observed or derived data (algorithmic) or volunteered by the individual. Profile data is often generated from Behavioural data).

## 9. Appendix E: Kantara CISWG Implementation Use Case (TBF)

The reference implementation for v0.8 draft of the Consent Receipt specification is the  Kantara CISWG demo Implementation for the Work Group sign-up form. The examples in this Consent Receipt specification are taken from this implementation.  https://kantarainitiative.org/beta-signup/

Kantara has a trusted and unique brand in trusted services, in that it is a community of people invested in standards development, trust tech, policy, protocols around identity and policy.  

Manage PI in membership and withdraw consent will further reflect the trusted brand that Kantara has built.  

To implement the consent receipt a review was required

## Review
To implement a consent receipt for the Kantara CISWG (Consent & Information Sharing Work Group) The WG Participation agreement.  This agreement on boards the  work group participant to the Consent & Information Sharing Work Group.  

* Review the privacy policy at Kantara,
* Review at the PI information sharing practices for Kantara WG membership.
* Review the privacy policy and membership agreement
* Review existing consent form (if there is one)

Privacy Policy Review ( https://kantarainitiative.org/confluence/display/GI/Privacy+Policy)
* Transfer of personal data to the USA can benefit from consent on the GPA form

## Results
consent & authority requested:
* Consent to Join WG (requires link to withdraw consent)
* Authority to consent on behalf of organsiation (requires link to withdraw authority)
* Consent Preference - voting or non-voting (link to policy for changing voting status)

WG PII Sharing practices
* Member data shared on WG WIKI in participation roster (link to participant roster)
* All post to mailing list are captured in a public achieved (link to mailing list  for m)

WG PI Sharing practices
* Share IP with Google Analytics (non-identified data) (link to policy)
