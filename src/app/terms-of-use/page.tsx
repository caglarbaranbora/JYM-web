import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/icons/yellowLogo.png"
                alt="JYM Fitness"
                width={50}
                height={50}
              />
              <span className="text-2xl font-bold">JYM Fitness</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#222222] hover:bg-[#333333] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Licensed Application End User License Agreement
        </h1>
        <p className="text-base text-gray-400 mb-2">
          Apps made available through the App Store are licensed, not sold, to
          you.
        </p>
        <p className="text-sm text-gray-500">Last Updated: January 2025</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              Your license to each App is subject to your prior acceptance of
              either this Licensed Application End User License Agreement
              (&quot;Standard EULA&quot;), or a custom end user license
              agreement between you and the Application Provider (&quot;Custom
              EULA&quot;), if one is provided. Your license to the JYM Fitness
              App under this Standard EULA is granted by JYM Fitness. Any App
              that is subject to this Standard EULA is referred to herein as the
              &quot;Licensed Application.&quot; JYM Fitness
              (&quot;Licensor&quot;) reserves all rights in and to the Licensed
              Application not expressly granted to you under this Standard EULA.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              a. Scope of License
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              Licensor grants to you a nontransferable license to use the
              Licensed Application on any Apple-branded or Android device that
              you own or control and as permitted by the Usage Rules set forth
              in the App Store Terms of Service or Google Play Terms of Service.
              The terms of this Standard EULA will govern any content,
              materials, or services accessible from or purchased within the
              Licensed Application as well as upgrades provided by Licensor that
              replace or supplement the original Licensed Application, unless
              such upgrade is accompanied by a Custom EULA.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              Except as provided in the Usage Rules, you may not distribute or
              make the Licensed Application available over a network where it
              could be used by multiple devices at the same time. You may not
              transfer, redistribute or sublicense the Licensed Application and,
              if you sell your device to a third party, you must remove the
              Licensed Application from the device before doing so.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              You may not copy (except as permitted by this license and the
              Usage Rules), reverse-engineer, disassemble, attempt to derive the
              source code of, modify, or create derivative works of the Licensed
              Application, any updates, or any part thereof (except as and only
              to the extent that any foregoing restriction is prohibited by
              applicable law or to the extent as may be permitted by the
              licensing terms governing use of any open-sourced components
              included with the Licensed Application).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              b. Consent to Use of Data
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              You agree that Licensor may collect and use technical data and
              related information—including but not limited to technical
              information about your device, system and application software,
              and peripherals—that is gathered periodically to facilitate the
              provision of software updates, product support, and other services
              to you (if any) related to the Licensed Application.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              Licensor may use this information, as long as it is in a form that
              does not personally identify you, to improve its products or to
              provide services or technologies to you.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              <strong className="text-white">Age Restriction:</strong> You must
              be at least 13 years of age to use the Licensed Application. If
              you are under 18 years of age, you must have your parent or legal
              guardian&apos;s permission to use the Licensed Application.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              c. Termination
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              This Standard EULA is effective until terminated by you or
              Licensor. Your rights under this Standard EULA will terminate
              automatically if you fail to comply with any of its terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              d. External Services
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              The Licensed Application may enable access to Licensor&apos;s
              and/or third-party services and websites (collectively and
              individually, &quot;External Services&quot;). You agree to use the
              External Services at your sole risk. Licensor is not responsible
              for examining or evaluating the content or accuracy of any
              third-party External Services, and shall not be liable for any
              such third-party External Services.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              Data displayed by any Licensed Application or External Service,
              including but not limited to financial, medical and location
              information, is for general informational purposes only and is not
              guaranteed by Licensor or its agents. You will not use the
              External Services in any manner that is inconsistent with the
              terms of this Standard EULA or that infringes the intellectual
              property rights of Licensor or any third party.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              You agree not to use the External Services to harass, abuse,
              stalk, threaten or defame any person or entity, and that Licensor
              is not responsible for any such use. External Services may not be
              available in all languages or in your Home Country, and may not be
              appropriate or available for use in any particular location. To
              the extent you choose to use such External Services, you are
              solely responsible for compliance with any applicable laws.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              Licensor reserves the right to change, suspend, remove, disable or
              impose access restrictions or limits on any External Services at
              any time without notice or liability to you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              e. NO WARRANTY
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE LICENSED
              APPLICATION IS AT YOUR SOLE RISK. TO THE MAXIMUM EXTENT PERMITTED
              BY APPLICABLE LAW, THE LICENSED APPLICATION AND ANY SERVICES
              PERFORMED OR PROVIDED BY THE LICENSED APPLICATION ARE PROVIDED
              &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITH ALL FAULTS
              AND WITHOUT WARRANTY OF ANY KIND, AND LICENSOR HEREBY DISCLAIMS
              ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE LICENSED
              APPLICATION AND ANY SERVICES, EITHER EXPRESS, IMPLIED, OR
              STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
              AND/OR CONDITIONS OF MERCHANTABILITY, OF SATISFACTORY QUALITY, OF
              FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY, OF QUIET ENJOYMENT,
              AND OF NONINFRINGEMENT OF THIRD-PARTY RIGHTS.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY LICENSOR OR ITS
              AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. SHOULD THE
              LICENSED APPLICATION OR SERVICES PROVE DEFECTIVE, YOU ASSUME THE
              ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR, OR CORRECTION.
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED
              WARRANTIES OR LIMITATIONS ON APPLICABLE STATUTORY RIGHTS OF A
              CONSUMER, SO THE ABOVE EXCLUSION AND LIMITATIONS MAY NOT APPLY TO
              YOU.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              <strong className="text-white">Medical Disclaimer:</strong> JYM
              Fitness is NOT a medical device or medical service. The
              information and services provided by the Licensed Application are
              for educational and informational purposes only and should not
              replace professional medical advice, diagnosis, or treatment.
              Always seek the advice of your physician or other qualified health
              provider with any questions you may have regarding a medical
              condition or fitness program.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              f. Limitation of Liability
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL LICENSOR BE
              LIABLE FOR PERSONAL INJURY OR ANY INCIDENTAL, SPECIAL, INDIRECT,
              OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT
              LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS
              INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING
              OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE LICENSED
              APPLICATION, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY
              (CONTRACT, TORT, OR OTHERWISE) AND EVEN IF LICENSOR HAS BEEN
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR
              PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO
              THIS LIMITATION MAY NOT APPLY TO YOU. In no event shall
              Licensor&apos;s total liability to you for all damages (other than
              as may be required by applicable law in cases involving personal
              injury) exceed the amount of fifty dollars ($50.00). The foregoing
              limitations will apply even if the above stated remedy fails of
              its essential purpose.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              g. In-App Purchases and Subscriptions
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              The Licensed Application may offer in-app purchases and
              subscription services. Subscriptions automatically renew unless
              cancelled at least 24 hours before the end of the current
              subscription period. Payment will be charged to your App Store
              (Apple) or Google Play Store (Android) account at confirmation of
              purchase.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              You may manage your subscriptions and turn off auto-renewal by
              going to your Account Settings after purchase. All purchases made
              through the App Store or Google Play Store are subject to their
              respective refund policies. Generally, all sales are final and
              non-refundable except as required by applicable law.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              The Licensed Application offers the following subscription tiers:
              (a) Basic (Free) - access to essential features; (b) Calorie AI+
              Monthly ($2.99/month) - includes premium features; (c) Calorie AI+
              Annual ($35/year) - includes all premium features with annual
              billing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              h. Export Restrictions
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              You may not use or otherwise export or re-export the Licensed
              Application except as authorized by United States law and the laws
              of the jurisdiction in which the Licensed Application was
              obtained. In particular, but without limitation, the Licensed
              Application may not be exported or re-exported (a) into any
              U.S.-embargoed countries or (b) to anyone on the U.S. Treasury
              Department&apos;s Specially Designated Nationals List or the U.S.
              Department of Commerce Denied Persons List or Entity List.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              By using the Licensed Application, you represent and warrant that
              you are not located in any such country or on any such list. You
              also agree that you will not use these products for any purposes
              prohibited by United States law, including, without limitation,
              the development, design, manufacture, or production of nuclear,
              missile, or chemical or biological weapons.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              i. U.S. Government End Users
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              The Licensed Application and related documentation are
              &quot;Commercial Items&quot;, as that term is defined at 48 C.F.R.
              §2.101, consisting of &quot;Commercial Computer Software&quot; and
              &quot;Commercial Computer Software Documentation&quot;, as such
              terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202, as
              applicable. Consistent with 48 C.F.R. §12.212 or 48 C.F.R.
              §227.7202-1 through 227.7202-4, as applicable, the Commercial
              Computer Software and Commercial Computer Software Documentation
              are being licensed to U.S. Government end users (a) only as
              Commercial Items and (b) with only those rights as are granted to
              all other end users pursuant to the terms and conditions herein.
              Unpublished-rights reserved under the copyright laws of the United
              States.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              j. Governing Law and Dispute Resolution
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              Except to the extent expressly provided in the following
              paragraph, this Agreement and the relationship between you and JYM
              Fitness shall be governed by the laws of the Republic of Turkey,
              excluding its conflicts of law provisions. You and JYM Fitness
              agree to submit to the personal and exclusive jurisdiction of the
              courts located within Istanbul, Turkey, to resolve any dispute or
              claim arising from this Agreement.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              If (a) you are not a citizen of Turkey; (b) you do not reside in
              Turkey; (c) you are not accessing the Licensed Application from
              Turkey; and (d) you are a citizen of one of the countries
              identified below, you hereby agree that any dispute or claim
              arising from this Agreement shall be governed by the applicable
              law set forth below, without regard to any conflict of law
              provisions, and you hereby irrevocably submit to the non-exclusive
              jurisdiction of the courts located in the state, province or
              country identified below whose law governs:
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              If you are a citizen of any European Union country or Switzerland,
              Norway or Iceland, the governing law and forum shall be the laws
              and courts of your usual place of residence. Specifically excluded
              from application to this Agreement is that law known as the United
              Nations Convention on the International Sale of Goods.
            </p>
          </section>

          <section className="mb-12 pb-8 border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              If you have any questions concerning this Licensed Application End
              User License Agreement, or if you would like to contact JYM
              Fitness for any reason, please contact us at:
            </p>
            <div className="text-base text-gray-300 space-y-2">
              <p>
                <strong className="text-white">Company Name:</strong> JYM
                Fitness
              </p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:contact.jymfitness@gmail.com"
                  className="text-white underline hover:text-gray-300"
                >
                  contact.jymfitness@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-white">Privacy Policy:</strong>{" "}
                <Link
                  href="/privacy-policy"
                  className="text-white underline hover:text-gray-300"
                >
                  https://jymfitness.com/privacy-policy
                </Link>
              </p>
              <p>
                <strong className="text-white">Support:</strong>{" "}
                <Link
                  href="/contact"
                  className="text-white underline hover:text-gray-300"
                >
                  https://jymfitness.com/contact
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
