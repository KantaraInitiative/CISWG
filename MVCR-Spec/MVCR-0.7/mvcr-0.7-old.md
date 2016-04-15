# MVCR-v0.7
## Minimum Viable Consent Receipt - Core MVCR Receipt Profile

# Abstract

The Consent & Information Sharing Working Group (CISWG) is documenting a minimum set of requirements that will support informed consent on the part of the user. The goal is to identify the necessary information to make a transaction compliant with Fair Information Practice privacy instruments and standards (see References) regardless of legal jurisdiction. These common requirements constitute a Minimum Viable Consent Receipt (MVCR) specifying the minimum required policy links, consent fields, and data formats to meet the minimum legal, transparency, and trust obligations for information sharing based on explicit consent.

The core Consent Receipt (CR) specification refers to the legal notices required for compliant consent to be valid when collecting personal information. 

# Status

The 0.7 version of this specification documents the *minimum* required and offers an alpha format for testing and implementation.  This version of the specification is intentionally as flexible as possible in order to accomadate the widest range of use cases for implementation.  Some fields are under review for inclusion in the next version of the specification.

# Editors

Mark Lizar
Heather Flanagan


## Intellectual Property Rights

This document is being developed by Kantara Initiative's Consent and Information Sharing Working Group (see <https://kantarainitiative.org/groups/ciswg/>). Participation in this group is free and open, and all work contributed to the effort falls into the Reciprocal Royalty Free with Opt-Out to Reasonable And Non discriminatory (RAND) IPR policy <https://kantarainitiative.org/confluence/x/mQByAg>.

Kantara Initiative (KI) is a non-profit membership organization that connects businesses, consumers, governments, and citizens through innovations and programs that support more natively trust worthy on-line experiences. The mission of KI is to foster identity community harmonization, interoperability, innovation, and broad adoption through the development criteria for operational trust frameworks and deployment/usage best practices for privacy-respecting, secure access to trusted online services.

# TOC

- insert table of contents here

# Introduction

The Minimum Viable Consent Receipt (MVCR) is a simple specification that describes a few basic elements common to consent across several legal jurisdictions and across a variety of contexts.  The term 'Minimum' in the MVCR refers to the least amount of fields to make a consent receipt viable.  Viable, in this context, means to use the consent receipt independently of the issuer. The consent receipt SHOULD involve the minimal set of  notice requirements for the company or organization issuing the receipt.

The fields in this v0.7 specification are the Alpha MVCR fields that the CISWG will use to implement and test the consent receipt.

# Notational Conventions

CISWG - Consent & Information Sharing Work Group
CR - Consent Receipt
CRG - Consent Receipt Generator
DC - Data Controller
DS - Data Subject
MVCR - Minimum Viable Consent Receipt
PI - Personal Information


# Terminology (TBF v0.8)

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this
document are to be interpreted as described in RFC 2119 [http://www.rfc-editor.org/info/rfc2119].


Privacy and Consent Terminology are mapped to the ISO 29100 which provides a basis for privacy standardizations for:
- technical reference architectures;
- the implementation and use of specific privacy technologies and overall privacy management;
- privacy controls for outsourced data processes;
- privacy risk assessments; or
- for specific engineering specifications.

There are terms in this specification that are not referenced in 29100 and these are listed here:
(NOTE: Terms to be formalised v.0.9)

Purpose Specification - [definition to be completed]
Personal Information - all attributes that are collected about the individual and the consent session can be deemed personal.
Information Sharing - [definition  to be completed]
Sensitive Personal Information Categories - refer to the legal categories defined in some jurisdictions like the EU and the US, which have additional notice and consent requirements.
Individual - this is referred to in this document and maps to existing terms, Data Subject in ISO 29100 this Principal, Person.
Bind - 

# Problem Statement(s)

The MVCR seeks to solve for a variety of problems that exist in online marketplace today.

## Consent is closed
There is no common consent record format, people do not get a record of consent which makes it difficult for people to track what they have consented too.  Each organization has their own unique privacy policy, policy structures and policy formats, again making it difficult for a person to know or track what they are consenting to.  Closed policies and consent violate the Openness Privacy Principles found in FIPPs, APEC, Canadian and European Law.  

The impact is that people are expected to log in to each service provider separately and to manage consent and their data seperately with each provider.  =  

## Cost, Regulation & Usability
Consent management is very costly to manage for all stakeholders,  difficult to regulate, and unusable for people at scale. The scale of information sharing however, continues to grow at a phenomenal rate,  with 90% of all data in the world  being generated in the last two years.  

## Consent is Not Scalable

As described above, there is no common consent record format and no standard practive  to bind trust frameworks to a service users consent.  

This is compounded by each organization posting their policies in different locations, using different trust frameworks, different technology and using different practices.   

# The Solution
The solution is an 'open consent' model that provides people with a simple, standardized, easy-to-read consent record.  The act of providing a consent record itself demonstrates the capacity for compliance and builds trust with the management of personal data.  

A common consent receipt format can be used as the first layer in layering privacy policy and it can be used to communicate about consent after the point at which it is provided.  By its use alon it builds reputations viewable before entering into the service.

This transparency makes consent more usable as it provides the means for people and CRM systems to evolve towards greater personal data control in line with regulation and context.


# Scope
CISWG: Internal Spec revision: This next iteration of  the MVCR specification is the Alpha: Minimum core requirements for a legitimate consent to be viable independently.

Core use is to make a standard way to communicate about fine grained consent and contexts, using policy, between DS and DC.  

The Minimum Viable Consent Receipt (MVCR) specification as the core fields required for creating a legitimate digital consent that can be used to bind frameworks, roles and required data controls, to a consent transaction.

The scope of the MVCR is limited to defining the minimum consent fields for an explicit consent. With the transparent aim to standardize the minimum fields to create a common receipt meta-format defined here and called a ‘consent receipt’ (CR).

# MVCR: Core Profile

## Design Principles (TBD v0.8)

## Functional Objective (TBF v0.8)

## 5 Sections
The MVCR is broken down into 5 sections for usability and to aid in understanding the core function. The 5 sections are:
1. Header
2. Data Controller Contact & Policy
3. Purpose Specification
4. Personal Information
5. Information Sharing

The order is specific and Must be followed for it to be systematic, it is designed so that the purpose and PI categories can be used and referenced for specifying Information sharing. 

### Header
The administrative data for a consent receipt, which MUST include, the jurisdiction, time and date stamp, location of processing (i.e. domain name), unique consent record id, and recieving parties point of contact. (email address is recommended default for v0.7)

### Data Controller Contact & Policy
The consent receipt MUST contain name or title and the contact information of DC, if this is a delegated DC, this information primary purpose is for preference communication in the context of the privacy policy.  Contact MUST includes the address and direct contact information for consent management.  The quality and service level of the contact information can vary dramatically. 

### Purpose Specification
The purpose MUST be explicit, specified and legitimate.  
The purpose MUST contain the service name to be explicit and the specific purpose, it SHOULD contain an external reference to an on and off preference for this purpose. Finally, a purpose specification MAY contain additional options, for example, trust mark icon link, data retention, a link to the purpose description in the policy.  (Note: requires a footnote - reason should contain reference to - test if  an on and off can be used to meet legal obligations to withdraw consent or stop the processing of PI in some jurisdictions.)

Specifying the service name and the purpose for using personal information is required.  This can be used post consent for preference management, privileges/roles assignment, consent directives and other access or authorization policy requirements.

[Note: A common Purpose list, definitions of these purposes, and guidance/best practices are being discussed with recommendations to be found in Appendix A] 

### Personal Information Specification
Split into two types:
A) PI (SHOULD include the data captured at the point of consent, MUST include the categories of PI that the Data Controller or (person installing consent button), defines when creating the consent receipt button (e.g., IP Address, DNT Header))
(ref: )

B) Sensitive PI (a category of PI, with a yes/no indicator) defined by the creator of the consent receipt button.

These categories have legal notice and consent requirements in some jurisdictions that are beyond the scope of the MVCR format, but are required to be flagged in various jurisdictions and context.  

In the MVCR, if a Sensitive data category is selected then additional notice and purpose requirements exist that are beyond the scope of the core profile.  

For example:  A very common Sensitive category list would be data relating to:
 Personal Health  [X]
 Child PI  [ ]
 Financial [ ]
 Sexual Life [ ]
 Add +

In this example if the data capture was health related in the US, then health should be displayed and a HIPAA compliant purpose list and Health PI category list added to the receipt, in many cases with a 3rd party standard, certification and trustmark to increase usability and transfer liability.

### Information Sharing Specification
In the MVCR this is a Y/N (binary on and off) flag, and if On, then the 3rd parties, the specified purpose and at the minimum the data categories shared are be listed here.

(Note: TBD In v0.8 binding roles and policy, contact for information sharing should be here and a reference to Terms & Conditions, which is an additional consent/contrct that is downstream can also be linked into a 'infomration sharing specification'.  (similar to the structure of a purpose specification)

## Fields in Review v0.8:
In order to create v0.7 much has been cut to the minimum, this includes some feild that are in review, these are

 * Review consent transaction data
 * Review consent context
 * Review - Link to short privacy notice
 * Review consent payload
 * Review Resource Server Identifier
 * Review OAuth Scopes
 * Review and what is —> Audience URI
 * Consent Location

### Use cases

The use cases are currently active, the use case status page can be found at the Kantara CIS Wiki Page. 


## Consent Receipt Generation

#  Two Party Consent Receipts
        Two Party is a simple version of generating a  consent receipt,
            Two party example for a general website use case:
                Found Here https://kantarainitiative.org/confluence/x/ToVtB -
            Note: Other Ways to Generate a consent receipt:
                Text: document with a consent receipt form in it, or
                a consent scrape by the user with a browser plugin,
                a consent receipt request from the person to the company by email.
                Consent Receipt From Record i.e. an email box scrape
                Consent Receipt with API hosted by consent collector
# 3rd Party Consent Receipt
        Consent Receipt Generator:
            CISWG has setup a Kantara funded example  at http://api.consentreceipt.org/ for developing and playing with use cases.  On this page there is a form that uses the api  to render and make downloadable as JWT a Consent Receipt in the web page.  This is an example of a third party issuance of a consent receipt. (note see legal considerations)

## Implementation Use Cases

### Join Form Can Be Found here (https://kantarainitiative.org/signup/) select CISWG to get the consent receipt as an option to joining the work group. (note: there is also an option to check if the receipt is for test purposes)

This is the CIS WG implementation for joining the work group.  (dog food in progress)

####  Consent Receipt.Org Website (TBD v0.8 http://www.consentreceipt.org)
This is a landing page for the consent receipt that will increase access to the CR work. 

### Proposed CIS-Use Case  for MVCR (TBD v0.8)

Create a  Consent Receipt Button Generator for website implementation, as well as a receipt template for the MVCR v0.7. 

### Field Description Table: Field, Logic, JWT Claim

Current table can be found at : https://kantarainitiative.org/confluence/display/infosharing/MVCR%3A+Core+Consent+Receipt+Profile+v0.7
This is actively being develiped in the Consent & Infomration sharing WG, which can be found at https://kantarainitiative.org/confluence/display/infosharing/Home
                        |

### Consent Receipt Generator (CRG)

A prototype for generating a consent receipt with the MVCR API can be found at (Note: This is not a prototype of the MVCR v0.7, but a strawman)

http://api.consentreceipt.org/

This example site consists of two pages
1. for the Consent Receipt Generator Input Example and Receipt Rendering, this is used to play with inputs and to see their output. This is used to help develop implementations and see how the consent receipt (GitHub repository) code is working.

The github repository for this code is
--> https://github.com/bspk/cr_web

2. for API Documentation and examples, these can be found at
http://api.consentreceipt.org/doc/

### Consent Receipt Generator API
This server provides a consent receipt generation API. The API consists of a single endpoint:

http://www.consentreceipt.org/mvcr/api

This endpoint accepts HTTP POST requests with input in the form of JSON (application/json) documents and output in the form of a signed JSON Web Token (application/jwt).

## How It Works

The API takes in a JSON document describing the consent transaction for which the receipt is to be generated. This object includes artifacts such as the presiding jurisdiction for the consent action, an identifier for the party consenting. The output of the API is a signed JSON Web Token (JWT) whose payload consists of all of the input data as well as several additional fields. This JWT is digitally signed by the server.

## Digital Signature Information
The output JWT is signed using the RS256 algorithm defined in JSON Web Signatures. The server's public key is published in JSON Web Key format at:

http://www.consentreceipt.org/api

## Example

An example input to the API is the following JSON object:

The latest documentation for example input can be found at
http://www.consentreceipt.org/api
(Note: At the moment 1-Aug-2015 It is out of sync with this v0.7 of the specification, when it is in sync it should be pasted here)

# References [TBD v0.9] and Further Reading


[AQ: The References section will need to be restructured to link to specific citation points in the text. Should that be done for 0.7 or at a later version of the draft?]

The MVCR is written with reference to terminology found in:
* ISO/IEC 29100	Information technology – Security techniques – Privacy framework
* ISO/IEC 29115	Information technology – Security techniques – Entity Authentication Assurance

Supporting reference to ISTPA: Analysis of privacy principles:
* ISTPA, (2007) Analysis of Privacy Principals, pg. 64, [Online] http://www.istpa.org/ [Accessed Nov, 4 2010]
* Minister of Economy Office, Japan (2014) Guideline for the online notice and consent from consumers, http://www.meti.go.jp/press/2014/10/20141017002/20141017002a.pdf.  [Includes examples of a consent receipt in guidelines proposed in the context of ISO 29100]

# Appendix A: Generic Requirements

1. The receipt MUST have a property to authenticate the origin.
2. The receipt MUST have an integrity protection property.
3. The audience SHOULD be restricted and transparent.
4. The receipt SHOULD be able to be transmitted over various transport protocols.
5. The payload MUST have a human readable section, and SHOULD have a machine readable section.
6. The payload SHOULD include the following properties:
  a) Issuer
  b) Date
  c) Time
  d) direct contact information to data controller
  e) Contain a static Link to privacy policy
  f) Purpose (s)
  g) YES or NO Flags
    * 3rd party data sharing
    * Sensitive Personal Data Collection
    * Operational Context
7. The payload SHOULD include the following properties:
  a) A description of the types of personally identifiable information to which the consent applies.
8. The payload SHOULD include the following information:
  a) the personal identifier used in the consent receipt
  b) some or all of the personally identifiable information to which the consent applies
8. The receipt MUST be systematically usable and automatically discoverable
9. Receipts MUST contain the minimum information to enable request for more information, if required
10. Receipts MUST contain the minimum information to enable requests for more information, if required

# Appendix B: Purpose List

[In Progress]

[The following is vectored in from https://github.com/RichardBeaumont/MVCR/commit/399c5a503890d79f788d52ee572fe01138f07cf7]

+This appendix provide a default purpose list  and Personal Data list that SHOULD be used for MVCR implementations  

- 1.	Enabling us to carry out the core functions of our site/app/services.
- 2.	Providing contracted or requested services to you.
- 3.	Delivering physical goods to you.
- 4.	Communicating with you about information or services you specifically request.
- 5.	Providing you with a personalised experience of our site/app/service.
- 6.	Communicating with you about our other services you may be interested in.
- 7.	Communicating with you about the services of third parties you may be interested in.
- 8.	Providing the information to third parties to deliver our services on our behalf.
- 9.	Providing the information to third parties to enable them to communicate with you about their own services you may be interested in.
- 10.	Providing the information to third parties to enable them to deliver or improve their own services to you.
- 11.	Providing the information to third parties to enable them to deliver or improve their own services to others.
- 12.	Complying with our legal obligations for record keeping.
- 13.	Complying with our legal obligations to provide the information to law enforcement or other regulatory/government bodies.
- 14.	Protecting your vital and health interests.
- 15.	Protecting our legitimate interests, yours or those of a third party.
- 16.	Measure or improve our performance or the delivery of our services.


### Appendix C: Categories of Personal Data (explainers/examples)

- 1.	Biographical – (General information like Name, DOB, Family info (mother’s maiden name), marital status. Historical data like educational achievement, general employment history.)
- 2.	Contact – (Address, Email, Telephone Number, etc.)
- 3.	Biometric – (Photos, fingerprints, DNA.  General physical characteristics – height, weight, hair colour.  Racial/ethnic origin or identification - whether self-identified or not)
- 4.	Communications/Social – (Email, message and phone records – both content and metadata.  Friends and contacts data.)
- 5.	Network/Service – (Login ids, usernames, passwords, server log data, IP addresses, cookie-type identifiers)
- 6.	Health – (Ailments, treatments, family doctor info.  X-rays and other medical scan data)
- 7.	Financial – (This includes information such as bank account, credit card data. Income and tax records, financial assets/liabilities, purchase/sale of assets history.)
- 8.	Official/Government Identifiers – (This includes any widely recognised identifiers that link to individual people.  Examples include National Insurance, ID card, Social security, passport and driving licence numbers, NHS number (UK).  Just the numbers rather than data associated with them.)
- 9.	Social Services/Welfare – (Welfare and benefits status and history)
- 10.	Judicial – (Criminal and police records, inc. traffic offenses.)
- 11.	Property/Asset – (Identifiers of property – licence plate numbers, MAC addresses for mobiles, other device identifiers. Not financial assets. Could include digital assets like ebook and digital music data)
- 12.	Human Resources – (Records held about employees/ members/ students  not elsewhere defined. Incl. HR records such as job title, attendance/disciplinary records.  Salary - as opposed to income.)
- 13.	Psychological/Attitudinal – (Inc. religious, political beliefs, sexual orientation and gender identity – though not genetic gender which is Biometric. Traits and personality measures or assessments, but not psychological health - which is health data).
- 14.	Membership – (Political, trade union affiliations, any other opt-in organisational/group membership data - third party organisations only. Includes name of employer when not held by employer. Could extend to online platform membership.  Some might be more sensitive than others – may want a separate category)
- 15.	Behavioural – (Any data about the behaviour, habits or movements of an individual - electronic or physical. Location, browser/search history, web page usage (analytics), energy usage (smart meters), login history, calendar data, etc.)
- 16.	Profile – (Marketing and social segmentation data.  Any categorisation that impacts information presented or decisions made about an individual. This might be observed or derived data (algorithmic) or volunteered by the individual. Profile data is often generated from Behavioural data).
