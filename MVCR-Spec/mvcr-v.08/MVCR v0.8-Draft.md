# Minimum Viable Consent Receipt (MVCR): for a Consistent Record of Consent #

| Document Information  | |
| ------	| ------	|
| Version: | 1.0 Draft 0.8 |
| Date: | March 6, 2016 |
| Editors: | Mark Lizar |
| Contributors: |
| |	John Wunderlich |
| |     Justin Richer   |
| |     Mary Hodder     |
| |     Iain Henderson  |
| |     Sarah Squire    |

# Abstract

This specification identifies the consent requirements necessary to record a personal information (PI) sharing transaction and provide this record as an independent receipt.

The MVCR is designed to address existing closed consent that exists today, often defined by a binary and indefinite consent agreement. Closed Consent is addressed by providing both a common specification for recording consent and provision of a consent receipt for the use and sharing of personal information.   As the  consent receipt is required to be provisioned at point of consent this specification addresses FIPPs and ISO Principles - "Openness, transparency, notice") and Consent (ISO Principle 1 - "Consent and Choice")

A  consent receipt format provides a framework for binding a consent notice to a privacy control (i.e. Do Not Track), operationally useful to technically address multiple Fair Information Practice Principles and likewise map PII management to ISO 29100 privacy framework.

# Status of this document
The v0.8 draft is a  MVCR specification candidate - this draft version is for peer review and not meant for distribution.

## Copyright Notice
Copyright (c) 2016 Kantara and the persons identified as the document authors. All rights reserved.

This document is subject to the [Kantara IPR Policy - Option Patent & Copyright: Reciprocal Royalty Free with Opt-Out to Reasonable and Non-discriminatory (RAND)](https://kantarainitiative.org/confluence/download/attachments/2293776/Kantara%20Initiative%20IPR%20Policies%20_V1.1_.pdf?version=1&modificationDate=1244488630000&api=v2)[HTML version](https://kantarainitiative.org/confluence/pages/viewpage.action?pageId=41025689)


## Table of Contents
1. Objective
2. Scope
	* 2.1. MVCR Modes of Conformance]
3. Notational Conventions For Conformance
4. Terminology
6. MVCR Conformance and Compliance
	* 6.1 Global Guidance
	* 6.2 MVCR (online)
	* 6.3 EXPLICIT MVCR (TBF)
	* 6.4 COMPLIANT MVCR (TBF)
5. MVCR R Fields
	* 5.1. Header
	* 5.2 PI Controller Data
	* 5.3 Purpose Specification
	* 5.4.	Personally Identifiable Information
	* 5.5.	Information Sharing
	* 5.6.	Scope(s)
7. Appendix A: MVCR V2: ISO Terms and Compliant Consent
8. Appendix B: Consent Type -
9. Appendix C: Purpose Categories (or purpose type)
10. Appendix D: JSON Example and Demo V0.7 Consent Receipt Generator

(editors note: added objective and scope to the specification)

## 1.Objective
This specification identifies the common consent requirements to record and provision an independent record of consent in the form of a receipt to the individual.

### 2.Scope
This scope includes how to present the receipt fields in a receipt, the timing of the record, linking fields to external information, how to present the record fields, the data_type and order of fields.

Viable, in this scope, means a record of consent that can be retained and used separately by both issuer (PI Controller) and recipient (PI Principal) as proof of consent.

The term 'minimum' in the MVCR refers to the least amount of fields required to make a viable consent receipt  for a number of different contexts;

In MVCR v1,
* A) General Use MVCR - Defined by the PI Controller, implied and self-asserted

MVCR v2 -(see Appendix A)
* B) Explicit MVCR - machine readable Explicit consent - in reference to conformance with ISO 29100 Framework section 4,
* C) Compliant MVCR - Explicit consent mapped to notice and consent regulatory requirements and privacy controls;

The receipt has the Consent Type field, which can be externally defined, but, is defined by default ' Implied' 'Explicit', 'Opt-Out', Consent Type.

Not IN Scope
  The General MVCR conformance profile is intended to provide flexibility for implementation and easier adoption by not having the burden of legal compliance obligations for the implementor.  The MVCR v1 is not to be used for specifying sensitive personal data and compliance claims besides proof of consent.

The extensions for conformance to explicit consent and for meeting compliance requirements are at various levels of spec review and testing by the WG.   (see conformance table Appendix A)

 v0.8 (this draft) meets the requirement of providing a General Use MVCR, while also enabling the development a consistent consent framework for personal data control.


### 3 Notational Conventions for Conformance

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
document are to be interpreted as described in [RFC 2119](http://www.rfc-editor.org/info/rfc2119).

 [RFC7159](https://docs.kantarainitiative.org/uma/rec-uma-core.html#RFC7159)


### 4.  Terminology ###
(note: in progress)

Terminology herein leverages where possible,  [ISO/IEC 29100:2011 "Information Technology -- Security techniques -- Privacy Framework"](http://standards.iso.org/ittf/PubliclyAvailableStandards/c045123_ISO_IEC_29100_2011.zip).

  **Consent Notice**
 	    Refers to a notice that is required to inform the consentor what they are consenting too, without it consent is not possible, the quality and usability of the consent notice is what is often used to classify if a consent is legally informed or not, but this varies by jurisdiction context and interpretation.  Consent notices can vary from icons, short notices, direct communication, visceral notice and most often online a policy like terms of service and privacy policy.

* **Consent Receipt (CR)**
	 A record of a personal information consent transaction provided to the PI Principle at the time of Consent.

* **Explicit Consent**
	 Refers to explicit action taken by users in which consent is expressed, but, it is also in reference to explicitly stated purpose.  I.e. A box was ticked, or an 'I agree' button pressed in relation to listed purpose or purpose category. In this specification, explicit elements can be extended i.e. by an explicit reference to  authoritative policy and operational scope.

* **Non-Explicit Consent**
  (includes self-asserted and externally defined consent type), MVCR Lite Mode demonstrates   receipt  conformance with the MVCR, but is limited to conformance, and makes no compliance claims, but can demonstrate conformance with MVCR using defined consent types.

* **Explicit Consent Reference**
	Is best described as a directly linked field  to a function, law, or authoritative policy ; consent regulation, privacy principles, other consent standards, or industry best practices.

* **EXPRESS Consent**
	Refers to the context of a PI Principal making an unambigous agreement  to consent.  It is conceivable, in the context of this specification, that a consent can be  expressed  and contain explicit consent references to also be compliant  (see council of Europe 5.4.4 https://goo.gl/JGPX2Y)

* **Explicit Purpose:**
    A term used to reference how a purpose is specified,  each purpose is contained in a purppose category and is  explicit if it conincides with a consent for that specific purpose category.   i.e.  a  single purpose with a single check box.

* **Explicit 3rd Sharing:**
    The degree  that sharing is specified can be explicit.  In the specification, the sharing purpose category SHOULD be listed, as well as the the third party at a minimum. But, this can further be explicitly specified with options that include sharing contract, preference, and termination fields, which are beyond minimum requirements.

* **Individual**
	   see PII Principal in ISO/IEC 29100:2011.

* **Linked**
	In this specification, this means that there is a field that linked to an external source, icon, and or reference structure.

* **3rd Party Sharing**
	   A statement or series of statements that set out what information is shared with third parties and for what purpose(s).

* **Minimum Viable Consent Receipt (MVCR)**
	   Is a record of consent provided to the person providing consent for personal information sharing as a receipt.

* **OPT-OUT Consent**
	An example of 3 types of consent currently defined. Opt-Out is implied consent mechanism online that is used for an array of purpose specifications.

* **Personal Information (PI)**
	   See Personally Identifiable Information (PII) in ISO/IEC 29100:2011

* **Personally Identifiable Information (PII)**
       Personally identifiable information (PII), is defined in ISO/IEC 29100:2011.  The abbreviation PII is widely accepted in OECD base FIPPs jurisdiction, but the phrase it abbreviates has four common variants based on personal / personally, and identifiable / identifying. Not all are equivalent, and for legal purposes the operational definitions can vary depending on the specific purposes for which the term is being used. the term used more often is "personal information", which may be somewhat broader.  The specification, is able to reference PII Purpose Category directly to regulation, and in the context of identifiability for EXPLICIT consnet.

       "4.4 : To determine whether or not an individual should be considered identifiable, several factors need to be taken into account. In particular, account should be taken of all the means which can reasonably be used by the entity holding the data, or by any other party to identify that individual on the basis of the given information."  From ISO:29100, additional clarification available ...

       " Treatment of PII is distinct from other types of data because it needs to be not only protected, but also collected, maintained, and disseminated in accordance with Federal law." NIST 800-222

* **PI Principal**
    natural person to whom the PI relates, is used for explicit consent in which the person is identified, Principal ID,  is the primary (often principal choses) identifier for linking automatic processing to a persona, and/or collection of attributes provided at point of consent, which are used to identify the PI Subject are shared.

* **PI PRINCIPAL** (duplicate review)
	 refers to the personal data shared by a person to an organisation for which the individual provides consent for PI use.   See PII Principal in in ISO/IEC 29100:2011, also data subject (EC directive), consenter, PII PRINCIPLE in NIST 800, this refers to person providing their own personal information.

* **PII Confidentiality Impact Levels**
    These refer to low, medium, high confidentiality, or Not Applicable; which correspond to NIST controls sp800-122 and can be use for the organisation, the individual and the developer to ascertain on scale the level of risk and security.

* **Purpose Specification**
	A statement or series of statements that set out the purpose(s) for which PII has been collected.
  In the MVCR the purpose is intended to specify the context of use.

* **Context of Use**
      Organisations should evaluate the context of use to provide the purpose for which the PI is collected, stored, used, processed, disclosed, or disseminated.  The context of use may cause the same PI data elements to be assigned different PII confidentiality impact levels based on their use.  For example, suppose that an organization has two lists that contain the same PI fields (e.g., name, address, phone number).  The first list is people who subscribe to a general-interest newsletter produced by the organization, and the second list is people who work undercover in law enforcement.  If the confidentiality of the lists is breached, the potential impacts to the affected individuals and to the organization are significantly different for each list.

* **Sensitive Personal Information (PI) Categories**
  All Sensitive Information Categories require Explicit Consent
  Out of scope of the MVCR - See 6.5. Explicit Consent

* **Sensitive PI Categories**
    (Use only for Explicit Consent: used in MVCR for creating compliance claims)
  * Health
  * Financial
  * Child Data
  * Location
  * Biometric
  * Official Identifiers
  * Psycho/Social/Belief
  * Membership to Union
  * Other

  ## 5. MVCR Guidance

The MVCR inherently provides proof of consent and enough notice to communicate about consent, in order for a receipt to be valid.
  * The act of provisioning a receipt with valid and proportionally linked contact information is what effectively opens consent, and this start with BASIC MVCR consent receipt profile.
  * Providing a consent receipt constitutes proof of consent.
  * All conformance profiles culminate, in that the BASIC MVCR is used to create an EXPLICIT MVCR conformance profile, and or a COMPLIANT MVCR, all of these profiles are then useful to specify the operational policy and technical SCOPE(s) of the consent (if required).
  * All of the record fields should be presented with the consent receipt label fields on the receipt which is viewable by the receipt recipient.
  * The receipt can be provisioned in any manner that is feasible or expected in according to the context.
  * Proportionally refers to the context (or medium) of the consent, method of collection, and to how the fields are linked .
  	* If it is verbal (aka a Handshake), then a written receipt with a phone number to the PI Controller is sufficient to make a minimal MVCR for that context.
  	* If it is an online consent, like the normative Bob & Alice website use case, then additional (SHOULD) fields are a (MUST) in order to verify the claims in a BASIC MVCR
  	* Different context have different expectations, and these expectations should be documented and managed by policy and reflected in the receipt.
    * Basic receipt is ideal for not only proof of consent but dynamic consent, optional extensibility for making consent more explicit and enable users to withdraw consent preferences. (as well as consent)

  ### 5.1 Basic MVCR
  The  Basic MVCR conformance requirements are intended to make a consistent receipt and to provide people with this receipt as to make this record Open in both; a common format and common practice.  As a result it is a requirement that both the individual and organisation have a record of the consent. The receipt can be used by the individual to validate and communicate and manage the consent by both parties.

  So for a handshake, this might be a receipt written on

Out of Scope
  The Basic MVCR is used to provide a consent receipt that does not define sensitive personal information categories and is not used for compliance with out specific and explicit reference to laws and scope.

  Sensitive, compliant, and standards based definition of explicit check appendix.

  (move to appendix a)
  As a result, iterative changes or consent preferences can be developed and collected and managed on consent transaction level and with consent based change management, as long as it is linked to the original consent and iteratively logged.

Conformance terms
  To achieve conformance for a particular consent context, the MUST, SHOULD, and OPTIONAL fields extend to accommodate method of collection.

  Conformance The MUST Requirements for the BASIC MVCR is to Open Consent:
  * 1. Provide Proof of Consent in form of a dated Consent Receipt with purpose specified
  * 2. Provide Contact details to the PI Principal to communicate about, and manage, consent once it is provided.  Contact information MUST be proportionate to the method of collection and directly linked so as to be accessible in the context of consent provision for validation.

  Without providing details about what is sensitive, the basic consent receipt has a low risk of liability and provides enhanced consent once implemented.  The Basic MVCR V.1 is not meant to be used for regulatory compliance.


Information Sharing


  ### BASIC MVCR FIELD CONFORMANCE:

  ####  MVCR EXAMPLE(s) & Guidance

  1.  Verbal Open Consent (AKA a handshake)
   A hand written consent receipt for Verbal Consent would be:
  *- Date, Principal ID has provided verbal consent to, PI Controller, to use this PI Category, i.e. for membership, in accordance with printed privacy policy.  All issues or questions can be addressed by calling. PI Controller at Ph#.  (signed: both parties)

  | - MUST - | -  PI Controller, Core Purpose, Link to PP, Proportional Contact, Date & Time, Sensitive Y/N, Sharing Y/N,  Principal ID |
  | __SHOULD__ | - Jurisdiction, Consent Type, Collection Method, Service Name, Purpose Category, Purpose Termination, Sensitive  Information y/n, 3rd Party Sharing y/n |
  | __OPTIONAL__ |  PI Categories, Purpose Preference, Confidentiality Level, Sharing Purpose, Sharing Contract, Sharing, Scope(s)
  | MAY |
  | MUST NOT | Sensitive Personal Information Categories |

  | timestamp | alice@subject.com | Bob bob@bob.com |   verbal consent  |@bob | Not Sensitive | NO 3rd Party Sharing | Privacy Policy Read at point of Consent |

  2.  Conformance Guidance MVCR:  (TBF)

  * For general use on websites for existing consent: legacy website based consent, context can vary widely depending on the METHOD of Collection and the sensitivity of the PI the MVCR encorporates the minimum MVCR requirements and adds additonal MUST requirements.

  * Baseline Use Case: MVCR for existing consent online (website based enrolment) (see Alice and Bob)

  An agreed baseline of MUSTS and SHOULDS, that are used to illustrate Conformance

  | - MUST - | -  Consent Type, Collection Method, Service Name, Purpose Category, PI Controller, Core Purpose, Link to PP, Proportional Contact, Date & Time, Sensitive Y/N, Sharing Y/N,  Principal ID, Sensitive  Information y/n, 3rd Party Sharing y/n |
  | __SHOULD__ | - Jurisdiction,  Purpose Termination, |
  | __OPTIONAL__ | Sensitive PI, PI Categories, Purpose Preference, Confidentiality Level, Sharing Purpose, Sharing Contract, Sharing, Scope(s)
  | MAY |
  | MUST NOT | Sensitive Personal Information Categories |

  ##### Header Example

  | Field | Contents|
  | ------:	| ------	|
  | __Jurisdiction:__ | CA |
  | __Consent Time Stamp:__ | 2016/02/08 12:20:34 EST |
  | _Consent Type:__ | Explicit |
  | __Collection Method:__ | web form | [http://www.consentreceipt.org](http://www.consentreceipt.org) |
  | __Consent ID:__ | C159A448-A69B-44BF-BFCE-6403FB5D06EE |
  | __Principal ID :__ | [roadrunner@fictional.url](mailto:roadrunner@fictional.url) |

  ##### Header Guidance Notes -  TBF
  *  Jurisdiction -
  * Consent Time Stamp
  * Consent type guidance: used for explicit and non-explicit, or defined type, an can be linked to an external consent type profile for the  receipt.  (or N/A in the case where collection is a legal requirement)
  * **Note 1:** If collection is required by law, consent should not be sought except for other purposes, since consent is only meaningful if the PII Subject may say no.
  * Collection Method : provides an indication of the context, additional fields are appropriate for different contexts.  For instance on websites, digital fields are data collected is expected to be reflected on the receipt. (see should fields)
  * Consent ID: this is the identifier for the specific consent
  * Principal ID: is the primary personal information (PI)  identifier for linking automatic processing, which is normally volunteered and chosen by the principal.
  * Additional Should Fields Are included to applied in proportion to context of use and method of collection.

  ##### PI Controller Data Example ####

  | Field | Contents|
  | ------:	| ------	|
  | __Data Controller:__ | Acme Corporation, Inc |
  | __On Behalf :__ | null |
  | __Contact Name:__ | Mel Blanc |
  | __Contact Address:__ | 123 Main Street, Somewhere Else |
  | __Contact Email:__ | [mel.blanc@fictional.url](mel.blanc@fictional.url) |
  | __Contact Phone:__ | +1 555 555-1212 |
  | __Contact Other:__ | @twitter |
  | __Privacy Policy:__ | [ACME Privacy Policy](https://www.acme.fictional.url/privacy.policy) |

  ##### Guidance Notes
  * PI Controller - that is accountable for compliance over the management of PII, A PII in ISO 29100 (for explicit consent) controller determines why (purpose) and how (means) the processing of PII takes place. The PII controller shall ensure adherence to the privacy principles during the processing of PII under its control (e.g., by implementing the necessary privacy controls). There may be more than one PI(I) controller for the same PI(I) set or set of operations performed upon PI(I). In this case the different PI(I) controllers SHOULD be listed in the MVCR, MUST be listed for Explicit CONSENT SHARING .
  * Contact information used should be proportional to the method of collection and context.  All contact infomratin should be verifiable at the point of reciept provision
  * On Behalf - is used to delegate data controller and or data processing, which maps to the UK's as acting on behalf of the data controller, a third party analytics service would be a processor on behalf of the controller.  When the site operator is acting on behalf of the Data Controller
  * Contact Name - in some jurisdictions the name of the person responsible for processing PII is required
  * Contact Address - (of processor(s) )
  * Contact Email - the direct email to contact regarding the consent - DPO, CPO, administrator
  * Contact Phone - voice enquiries
  * Contact Other - alternative contact -i.e. @twittername
  * privacy policy link - The privacy policy link is to the current policy, if there are materials changes to this policy then a new consent is required for sensitive data categories and various trust network requirements. (note: can be used for compliance- privacy policy can be attached to the receipt payload.

    #### Purpose Specification Example ####

    | Service | Purpose |  Purpose Description | Purpose Preference | Purpose Termination |
    | ------ | ------ | :------: | :------: | :------: |
    | __Acme Web Site__ | Core Function | Website Services | NO | when account deleted |
    | __Acme Web Site__ | marketing | Contact data use  | NO | when service member (life of membership)  |
    | __Acme Web Site__ | Personalized Experience | profiling | YES | when leave location  |
    | Newsletter | Product Information | __Telling PII Subject about other services__ | Product Services | NO | N/A |
    | Product ADD-ONS |  Advertising | __Telling PII Subject about third party services__ | Marketing Third Parties | NO | N/A |
    | Consent Renewal | Core Function | Renewal of Consent with Renewal to Contract | Agreed to Changes in Purpose |  when account deleted |

    #### Guidance on Purpose(s)
     Repeat the  creation of purpose, attached to a purpose category or not,  these set of fields as many times as necessary to set out the purpose(s) and preferneces for data collection and use

    * **Purpose Preference**
      -  is a secondary purpose that is not core to the service, which can be turend on and off without withdrawing consent for the service.   A preference SHOULD correspond to a sharing scope  and linked to termination of purpose;

    * **Purpose Termination** - defines the duration of consent and/or its condition of termination.  Purpose Preference and Purpose termination are designed to be used in tandem and are put into Scope(s) Section (if machine readability is required)

    #### PI(I) Example(s) ####

    | Field Name | Example |
    | --- | --- |
    | PI Category |  Address |
    | PI Attributes | St, Name, City, Country Postal Code |
    | PI Confidentiality Level | low |
    | Sensitive Data | No |
    | Sensitive information category | Not Applicable for Implied Consent (MVCR) |

    The example below is for an on-line pharmacy that provides a delivery service

    | Category | Description | Sensitive | Confidential | Explanation |
    | ------ | ------ | :------: | :------: | :------: |
    | __Browser Data__ | Information revealed by the browser to the web server | False | Low | IP address is PII but not sensitive |
    | __Address__ | Physical address for deliveries | FALSE | Medium | used for billing  |
    | __Health__ | Personal Health Information| True | HIGH | Specified by regulation in many jurisdictions |
    | __Financial__ | Credit Card or payment information | True | HIGH | Specified by regulation in many jurisdictions |

    ### Guidance PI
    * ** PI Categories **
    - These are specified by industry and jurisdiction, but, we have a common list of PI Categores in Appendix C

    * ** PI Attributes **
    * 	These are the data attributes that are combined to create a category or data set. i.e.  first and last name of PII Principal, = Name.  PI Attributed can further be defined by permission, i.e. restricted access, read only, do not share, do not track, etc.

    * **Sensitive Data Y/N**
      This is a yes/no question:  can be used for MVCR but for non-explicit consent only - which mean its not used for explicit or compliant MVCR's, in this context the "other" field is used to specify sensitivity.


      #### 3rd Party Sharing Example

      The following example is from an online financial institution

      |  Service | Third Party | Sharing Purpose | Sharing Purpose Category | Explanation |
      | ------ | ------ | :------: | :------: |
      | Tax Assist | taxassist.com | tax filing |  Financial PI | to submit taxes | for pi_attributes |
      | __Financial__ | Tax Authority  | Required by Law Enforcement or Government | Financial institution required to disclose personal financial information for tax purposes |
      | Marketing Accountant Services  | Accountant Network |  Contact Details | Marketing Third Parties - Ad supported web site |

  **Note:** (John) PII provided to vendors or suppliers to the PII Controller that is providing data processing services of PII to the PII Controller would not normally be considered disclosure or information sharing |

      #### Sharing 3rd Party Guidance

      * Repeat the set of fields as many times as necessary to identify third parties
      * Termination of Sharing - includes duration, location, specified time, other
      * note (John) : is sharing a proxy or a security concern?
      * *Note:**  (John) PII provided to vendors or suppliers to the PII Controller that are providing data processing services of PII to the PII Controller would not normally be considered disclosure or information sharing |

      ####  Scope Example

  | Scope  | Purpose | Example |  Purpose Category |  PI Category | Scope Reference (linked) | Scope Description | Confidentiality |
  | ------ | ------ | :------: | :------: | :------: | :------: | :------: |
  | Technical | share | _network data | link to data list |  _Browser Data__, __IP Address__. | security | READ access | medium |
      | Technical | Collect | ,  __Health__, __Financial__  |  health records | secuirty | Read |  IP address is PII but has | low confidentiality |
      | | Physical address for deliveries | Read | | | | | | |
      | | Personal Health Information| Read + encrypted | linked to notice | | | |  |
      |  | Credit Card or payment information | Read + encrypted + specified 3rd party |  | | | | | |

      #### Scope Guidance

      * Scope - refers to the Scope field, which can be used to add, PI Categories, technical requirements, sensitivity level, and security requirements
      * Repeat to create scope, or enter defined scopes for of following set of fields as many times as necessary identify i.e. for each third party |
      * Scope name, this is the technical action, or the PI category required


  ### Implementation Guidance
  (TBR: INPUT and Review from JOHN and OLiver)
  * Each purpose MUST link the service name to at least one explicit and specific purpose.
  * Each purpose SHOULD contain an external reference to an on and off preference for this purpose.
  * Each purpose MAY contain additional options. Some examples include a trust mark icon or link, a data retention specification, or a link to the purpose description in the policy.
  *Note:** Managing consent directives is out of scope of the MVCR.

  MINIMUM MVCR Requirements
  * The PI Principal obtains a record of the consent at point in time consent is provided so as to be contextually #usable
  * The PI Principal and the PI Controller can use the receipt to communicate about the consent and its management
  * The consent receipt can be used by the PI Subject and the Data Controller to prove consent post the point in time the consent was provided
  * verifiable contact information is linked to the record which is proportional to the context and method of consent provision.
  * Conformance for MVCR requires a minimum of: contact information, proportional linking, and minimum viable purpose specification

## 5. MVCR Fields and Description

The MVCR is broken down into 6 sections for usability and to aid in understanding the core function.

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

### 5.2 PI Controller Information

This section identifies the individual and company that is accountable for data protection and the privacy policy to which the consent is bound.

| Receipt Field Label | Receipt Field Format | Data Field Name | Data Type | Example Data Input | Receipt Field Description | Purpose of Field  | Linked |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PI Controller | Name of processing entity | controller | object | {"on_behalf": true, "contact": "Dave Controller", "company": "Data Controller Inc.", "address": "123 St., Place", "email": "dave@datacontroller.com", "phone": "00-123-341-2351", "other": }  | name of the data controller | used to identify controller  | linked to controller record or domain |
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

This section specifies personal information categories, attributes, PI confidentiality level, PI Sensitivity for the purpose of explicit personal data tracking.  (Note: Sensitive Information Category is used for Compliance Specification)

| Receipt Field Label | Receipt Field Format | Data Field Name | Data Type | Example Data Input | Receipt Field Description | Purpose of Field  | Linked |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PI Categories |text | pi_category | string |  address | short description of personal data | to classify PI attributes | linked to framework definition of category |
| PI attributes | attributes name | attribute | {text=attribute value} |  multiple PI attributes can be added to a purpose category | used to map technical scope  | not linked externally |
| PI Confidentiality Level | {low, medium, high, N/A } | con_level | string | low | confidentiality risk level | for security considerations based on purpose and attribute exchange | not linked |
| Sensitive Data Y/N | text | yes or no | sensitive | string | Yes | indicates if data is sensitive or not sensitive | used to indicate if consent categories: (see sensitive categories) | should be linked to a notice about what is sensitive |
| Sensitive Information Category | list of categories with check boxes | sic | string | "Health" | used in the specification to indicate further notice  requirements are needed and the receipt has compliance claims | not linked |

### 5.5 3rd Party Sharing (TBF)

The purpose of this section is to provide the PII Subject with information about how their information is shared with third parties. In the MVCR this is a Y/N (binary on and off) flag, and if On, then the 3rd parties can be specified, using purpose and at the minimum the purpose categories for the sharing of PI.

| Receipt Field Label | Receipt Field Format | Data Field Name | Data Type | Example Data Input | Receipt Field Description | Purpose of Field  | Linked |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3rd Party Sharing Y/N|  Sharing "" | sharing | string | YES | a yes no flag that indicate if PI is being shared | indicate if sharing is occurring for the purposes specified in the receipt | not linked |
| Third Party | Name of Organisation (Text) | 3rdp | string | Bob's Website | Third party that receives the PI | to identify data controller and purpose | SHOULD be Linked |
| Sharing Purpose | select from existing purpose or purpose category field input |  sh_purpose | string | core service | to identify reason for sharing | not linked |
| Sharing Purpose Category | select from existing purpose category field input | sh_purpose_cat | string | core service | to identify expectation  for sharing | not linked |
| Termination of Sharing | | | |
| Sharing contract/policy | | | |

### 5.6  Scope(s)
|  Scope |  scope name | PI Category | PI Purpose |  PI Preference | Permission | Data Type | Example  Data Input | Scope Description | Scope Purpose  | Linked |
| --- | --- | --- | --- | --- | --- | --- | --- | -- | -- |
| Technical/Legal | withdraw consent |  marketing | 3rd party sharing | YES | {purpose preference string} | data@subject.com, consent id, principal ID, purpose preference, terminate | technical scope | to terminate consent preference | linked to preference in profile |

# 6. Conformance Table

This  table specifies requirements to fulfill conformance for each mode as defined.
 MVCR is for all types of implied and mixed consent contexts.
EXPLICIT MVCR is for standardised consent contexts
COMPLIANT MVCR is for specific privacy controls as defined by regulation or policy

| Field # | Field Name |  MVCR  | Explicit MVCR | COMPLIANT MVCR UK | Scope |
| ------ | ------ | -----| :------: | :------: | :------: |
| 1 | _Jurisdiction_ | SHOULD | MUST | MUST |  |  |
| 2 | _Consent Time Stamp_ | MUST |   MUST| | |
| 3 | _Consent Type_ | SHOULD | MUST |  |   |
| 4 | _Collection Method_ | SHOULD | MAY | | |
| 5 | _Consent ID_ | MUST |  | | |
| 6 | _PI Principal ID_ | MUST |  | | |
| 7 | _PI Controller_ | MUST | | | |
| 8 | _On Behalf_ | MUST | | | |
| 9 | _Contact Name_ | MUST 1 of 9-13 |
| 10 | _Contact Address_ | MUST 1 of 9-13 |
| 11 | _Contact Email_ | MUST 1 of 9-13 |
| 12 | _Contact Phone_ | MUST 1 of 9-13 |
| 13 | _Contact Other_ | MUST 1 of 9-13 |
| 14 | _Privacy Policy_ | MUST |  | | |
| 15 | Service | SHOULD | |  | | |
| 16 | Purpose | MUST | |  | | |
| 17 | Purpose Category |SHOULD | |  | | |
| 18 | Purpose Preference (Y/N) | OPTIONAL | |  | | |
| 19 | Purpose Termination/Duration/Renewal | SHOULD |  |  | | |
| 20 | PI Categories | OPTIONAL | |  | | |
| 21 | PI Attribute(s) | MAY | |  | | |
| 22 | PI Confidentiality Level | OPTIONAL | |  | | |
| 23 | Sensitive Data Y/N | SHOULD | |  | | |
| 24 | Sensitive Information Category | MUST NOT |
| 25 | 3rd Party Sharing Y/N | SHOULD | |  | | |
| 26 | Third Party | SHOULD | |  | | |
| 27 | Sharing Purpose | OPTIONAL | |  | | |
| 28 | Sharing Contract/Policy | OPTIONAL | |  | | |
| 29 | Scope(s) | OPTIONAL | |  | | |




## 6.3 Explicit Consent (TBF After MINIMUM MVCR)
* (Note: The more explicit the consent record and receipt the more machine readable it should become.)
* All Sensitive Information Categories require Explicit Consent
* All of the requirements of the previous +  additional fields for the receipt to be deemed explicit for PII in ISO 29100
*  explicit consent: "Guidelines for Notification, Consent and Choice in Online Services for Consumers" which  http://www.meti.go.jp/press/2014/10/20141017002/20141017002a.pdf (which can be found translated on the Kanatar WIKI - http://tinyurl.com/explicit-guide )

FIELD CONFORMANCE: EXPLICIT MVCR
- MUST -
- SHOULD -
- OPTIONAL -
- MAY -
- MUST NOT _

* **Sensitive Data Categories**
  (Use only for Explicit Consent: used for creating compliance claims)
* Heath
* Financial
* Child Data
* Location
* Biometric
* Official Identifiers
* Psycho/Social/Belief
* Membership to Union
* Other
- Criminal/Justice (UK)


 (not usable for MINIMUM MVCR) Sharing sensitive personal information, is actively regulated and requires explicit consent by all OECD FIPPs based regulations, and for trade of information and technology between jurisdictions.  Use of this field is subject to regulatory requirements.  (Notes:  This field provides the normative baseline for binding practice to laws and standards within an Open Consent.  This category is specified, but also flexible so that it can expand to authoritative decisions about new categories and the definition of existing category, like the GDPR which requires consent to be both :  “explicit”  and evidenced by “a statement or by a clear affirmative action” ref GDPR - Doc )

 (Editors Notes: out-of-scope of the MINIMUM MVCR )
* field is optional, unless for compliance then it is required and linked to authoritative notice, references, and scopes - these are further specified by jurisdictional legislation, terminology.  Even so,  there are common sensitive data categories for personal information which are enforceable, listed here;  The listing of a sensitive data category in this field indicates that this receipt links to requirements for binding  compliance claims. TBF post v0.8 draft )

* Sensitive PI Categories  can be further utilized by linking authoritative requirements to the receipt in a way that can be proportionally validated to context.  Providing a context mechanism for trust elevation that can be effectively programed by policy. ( editors note) Which is an inherent requirement for IOT i.e. video surveillance and trust.

* The consent receipt can further be extended with a jurisdictional notice and consent field profile that links to compliance requirements. (See 6.4  Compliant)  (note: can be delegated by the PI Controller or to 3rd party trust frameworks. using the link)

* Note: The use of these features make compliance claims when used

Note:  The receipt MUST be selected as explicit consent, as well as determine the functional notice and consent requirements to be compliant.  These can then be used to specify the such the 'other' field MUST NOT be present when the explicit consent type is selected.  Requirements are supplied by jurisdiction and industry and is out-of-scope of the MVCR  implied consent receipt specification.)

## 6.4  compliance UK (example of compliance requirements) (TBF)

* All previous requirements + explicit references to requirements and its satisfaction (presented as a X (or UK) profile for compliance)
* Note example compliant with current UK legislation (not GDPR)
* Machine readable is a requirement in order to automate the validation of wether or not a receipt is compliant. (Automated DYNAMIC CONSENT)
* Conformance Guidance for Explicit Consent Compliance:
the CR purpose is to provide a specific set of requirements for explicit consent, which can be mapped to legislation and regulation  to indicate/demonstrate compliance. The legislation notice requirements for auditing the explicit compliance of a consent receipt can be determined by looking at the jurisdiction and header of the receipt, and to use the purpose and sensitive sharing categories to consistently reference required legislation.
The list of compliance requirements are listed in the compliance mapping table and this is appended to the existing MVCR Requirements.

### Compliance Mapping Table
Table to  map notice compliance requirements to specific consent legislation/policies/best practices, used to support the compliance claims made by the consent receipt.

|  Personal Data |  Sensitive Data |  Jurisdiction | - Policy (law, best practice, standard) - | Notice Requirements - | Description (list of notice elements  to describing how these notice requirements are met) | List of Scopes operationally required to make compliant | Linked (can be to a third party icon)|
| -- | -- | --| --|  -- | -- | --|
| medical records | Health | UK | DPA | Register at Data Controller Registry; include criminal records as sensitive data, map PI to data subject,   | notice for use, store Encrypted, log access,   | -- | --|


FIELD CONFORMANCE: COMPLIANT MVCR
- MUST -
- SHOULD -
- OPTIONAL -
- MAY -

Example,  UK :  "Sensitive personal data" in the UK, is a bit different.
**Sensitive PI Categories**
   (Use only for Explicit Consent: used in MVCR for creating compliance claims)
 * Health
 * Financial
 * Child Data
 * Location
 * Biometric
 * Official Identifiers
 * Psycho/Social/Belief
 * Membership to Union
 * Other
 - Criminal Offence/Offence Proceeding (UK)

. (additional categories G & H needed to be added to Sensitive Data List as sensitive data that requires and explicit consent)  (see below)

In this Act “sensitive personal data” means personal data consisting of information as to—

(a)the racial or ethnic origin of the data subject,

(b)his political opinions,

(c)his religious beliefs or other beliefs of a similar nature,

(d)whether he is a member of a trade union (within the meaning of the M1Trade Union and Labour Relations (Consolidation) Act 1992),

(e)his physical or mental health or condition,

(f)his sexual life,

(g)the commission or alleged commission by him of any offence, or

(h)any proceedings for any offence committed or alleged to have been committed by him, the disposal of such proceedings or the sentence of any court in such proceedings. "
http://www.legislation.gov.uk/ukpga/1998/29/section/2

# 4. Appendices

## 4.1. All Fields

(IN Progress - completed once - fields drafted)

## 4.2. Appendix A: ISO 29100 Terminology

At the outset of the MVCR it was the intention to move, if possible, this specification to ISO, as well, it was recognized that

>> ISO/IEC 29100:2011 ...provides a privacy framework which can be leveraged in reference to:
>>
>> * specifies a common privacy terminology;
>> * defines the actors and their roles in processing personally identifiable information (PII);
>> * describes privacy safeguarding considerations; and
>> * provides references to known privacy principles for information technology.
>>

ISO/IEC 29100:2011 is applicable to natural persons and organizations involved in specifying, procuring, architecting, designing, developing, testing, maintaining, administering, and operating information and communication technology systems or services where privacy controls are required for the processing of PII."

Although, through the spec work it has become apparent that we can borrow from ISO,  this specification needs to have within it a specific terminology that is independent of other specifications.  Even so, we adopted Personal Information (rather Personal Data) and like decisions to increase interoperability of this work with this framework.  Similarily, where possible all fields and terms are referenced.  as well, Here in lies the mapping of terminology and components.

(put in table here mapping elements of MVCR Spec to ISO 29100)
(ref- FIPPs and  (ISO Principles - "Openness, transparency, notice") and Consent (ISO Principle 1 - "Consent and Choice") are fundamental privacy principles, addressed with this specification.
(editors note:  - how should this be referenced and linked? )



## 4.2. Appendix B: Purpose Categories

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
| 10. | Providing the information to third parties to enable them to deliver or improve their own services to you. | _3rd Party Sharing for Core Function_ | |
| 11. | Providing the information to third parties to enable them to deliver or improve their own services to others. | _3rd Party Sharing for ..._ | |
| 12. | Complying with our legal obligations for record keeping. | _Legally Required Data Retention_ | |
| 13. | Complying with our legal obligations to provide the information to law enforcement or other regulatory/government bodies. | _Required by Law Enforcement or Government_ | |
| 14. | Protecting your vital and health interests. | _Protecting Your Health_ | |
| 15. | Protecting our legitimate interests, yours or those of a third party. | _Protecting Our Interests_ | |
| 16. | Measure or improve our performance or the delivery of our services. | _Improve Performance_ | |

Other purposes may be uses as appropriate for the specific context of each jurisdiction and the site, application or service.

## 4.3. Appendix C: Categories of Personal Data (explainers/examples)

- 1.	Biographical – (General information like Name, DOB, Family info (mother’s maiden name), marital status. Historical data like educational achievement, general employment history.)
- 2.	Contact – (Address, Email, Telephone Number, etc.)
- 3.	Biometric – (Photos, fingerprints, DNA. General physical characteristics – height, weight, hair colour. Racial/ethnic origin or identification - whether self-identified or not)
- 4.	Communications/Social – (Email, message and phone records – both content and metadata. Friends and contacts data.)
- 5.	Network/Service – (Login ids, usernames, passwords, server log data, IP addresses, cookie-type identifiers)
- 6.	Health – (Ailments, treatments, family doctor info. X-rays and other medical scan data)
- 7.	Financial – (This includes information such as bank account, credit card data. Income and tax records, financial assets/liabilities, purchase/sale of assets history.)
- 8.	Official/Government Identifiers – (This includes any widely recognised identifiers that link to individual people. Examples include National Insurance, ID card, Social security, passport and driving licence numbers, NHS number (UK). Just the numbers rather than data associated with them.)
- 9.	Social Services/Welfare – (Welfare and benefits status and history)
- 10.	Judicial – (Criminal and police records, inc. traffic offenses.)
- 11.	Property/Asset – (Identifiers of property – license plate numbers, MAC addresses for mobiles, other device identifiers. Not financial assets. Could include digital assets like ebook and digital music data)
- 12.	Human Resources – (Records held about employees/ members/ studentsP not elsewhere defined. Incl. HR records such as job title, attendance/disciplinary records. Salary - as opposed to income.)
- 13.	Psychological/Attitudinal – (Inc. religious, political beliefs, sexual orientation and gender identity – though not genetic gender which is Biometric. Traits and personality measures or assessments, but not psychological health - which is health data).
- 14.	Membership – (Political, trade union affiliations, any other opt-in organisational/group membership data - third party organisations only. Includes name of employer when not held by employer. Could extend to online platform membership. Some might be more sensitive than others – may want a separate category)
- 15.	Behavioural – (Any data about the behaviour, habits or movements of an individual - electronic or physical. Location, browser/search history, web page usage (analytics), energy usage (smart meters), login history, calendar data, etc.)

4.4 APPENDIX D ### JSON Demonstrator:  (editors note: normative for MVCR ALPHA V0.7 ) - update required)
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
