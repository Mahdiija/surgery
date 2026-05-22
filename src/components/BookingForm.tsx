'use client';

import {useTranslations} from 'next-intl';

export default function BookingForm() {
  const t = useTranslations('BookingPage');

  return (
    <div className="bg-surface-container-lowest clinical-shadow rounded-xl p-6 md:p-12 animate-fade-in-up">
      {/* Progress Stepper */}
      <div className="flex justify-between items-center mb-8 md:mb-12 overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex flex-col items-center gap-2 min-w-[80px]">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-sm md:text-base">1</div>
          <span className="font-label-sm text-[10px] md:text-label-sm text-secondary whitespace-nowrap">{t('Steps.service')}</span>
        </div>
        <div className="flex-1 h-px bg-outline-variant mx-2 md:mx-4 -mt-6 md:-mt-gutter"></div>
        <div className="flex flex-col items-center gap-2 min-w-[80px]">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-sm md:text-base">2</div>
          <span className="font-label-sm text-[10px] md:text-label-sm text-on-surface-variant whitespace-nowrap">{t('Steps.schedule')}</span>
        </div>
        <div className="flex-1 h-px bg-outline-variant mx-2 md:mx-4 -mt-6 md:-mt-gutter"></div>
        <div className="flex flex-col items-center gap-2 min-w-[80px]">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-sm md:text-base">3</div>
          <span className="font-label-sm text-[10px] md:text-label-sm text-on-surface-variant whitespace-nowrap">{t('Steps.info')}</span>
        </div>
      </div>

      <form className="space-y-8 md:space-y-12">
        {/* Step 1: Reason for Visit */}
        <section>
          <h2 className="font-headline-sm text-lg md:text-headline-sm mb-6 flex items-center gap-3 text-on-surface">
            <span className="material-symbols-outlined text-secondary">medical_services</span>
            {t('Form.reason.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block font-label-md text-label-md text-on-surface mb-2">{t('Form.reason.label')}</label>
              <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-body-md text-body-md focus:outline-hidden focus:border-secondary focus:ring-3 focus:ring-secondary/10 transition-all appearance-none text-on-surface">
                <option disabled selected value="">{t('Form.reason.placeholder')}</option>
                <option value="wisdom">{t('Form.reason.options.wisdom')}</option>
                <option value="implants">{t('Form.reason.options.implants')}</option>
                <option value="orthognathic">{t('Form.reason.options.orthognathic')}</option>
                <option value="trauma">{t('Form.reason.options.trauma')}</option>
                <option value="pathology">{t('Form.reason.options.pathology')}</option>
                <option value="tmj">{t('Form.reason.options.tmj')}</option>
              </select>
            </div>
          </div>
        </section>

        {/* Step 2: Preferred Date & Time */}
        <section>
          <h2 className="font-headline-sm text-lg md:text-headline-sm mb-6 flex items-center gap-3 text-on-surface">
            <span className="material-symbols-outlined text-secondary">calendar_today</span>
            {t('Form.appointment.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low rounded-lg p-4 md:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-label-md text-label-md text-on-surface">November 2024</h3>
                <div className="flex gap-2">
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-primary" type="button">chevron_left</button>
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-primary" type="button">chevron_right</button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center font-label-sm text-[10px] md:text-label-sm text-on-surface-variant mb-2">
                <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-on-surface text-sm md:text-base">
                {/* Mock calendar days */}
                <div className="p-2 text-on-surface-variant/40">28</div>
                <div className="p-2 text-on-surface-variant/40">29</div>
                <div className="p-2 text-on-surface-variant/40">30</div>
                <div className="p-2 text-on-surface-variant/40">31</div>
                <div className="p-2 hover:bg-surface-container-high rounded cursor-pointer">1</div>
                <div className="p-2 hover:bg-surface-container-high rounded cursor-pointer">2</div>
                <div className="p-2 hover:bg-surface-container-high rounded cursor-pointer">3</div>
                <div className="p-2 hover:bg-surface-container-high rounded cursor-pointer">4</div>
                <div className="p-2 bg-secondary text-on-secondary rounded font-bold">5</div>
                <div className="p-2 hover:bg-surface-container-high rounded cursor-pointer">6</div>
                <div className="p-2 hover:bg-surface-container-high rounded cursor-pointer">7</div>
                <div className="p-2 hover:bg-surface-container-high rounded cursor-pointer">8</div>
                <div className="p-2 hover:bg-surface-container-high rounded cursor-pointer">9</div>
                <div className="p-2 hover:bg-surface-container-high rounded cursor-pointer">10</div>
              </div>
            </div>
            <div className="space-y-4">
              <label className="block font-label-md text-label-md text-on-surface">{t('Form.appointment.slots')}</label>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 border border-outline-variant rounded-lg font-body-sm text-body-sm hover:border-secondary transition-colors text-on-surface" type="button">09:00 AM</button>
                <button className="p-3 border border-outline-variant rounded-lg font-body-sm text-body-sm hover:border-secondary transition-colors text-on-surface" type="button">10:30 AM</button>
                <button className="p-3 bg-secondary-container text-on-secondary-container border-2 border-secondary rounded-lg font-body-sm text-body-sm" type="button">01:00 PM</button>
                <button className="p-3 border border-outline-variant rounded-lg font-body-sm text-body-sm hover:border-secondary transition-colors text-on-surface" type="button">02:30 PM</button>
              </div>
              <p className="text-body-sm text-on-surface-variant italic">{t('Form.appointment.note')}</p>
            </div>
          </div>
        </section>

        {/* Step 3: Patient Information */}
        <section>
          <h2 className="font-headline-sm text-lg md:text-headline-sm mb-6 flex items-center gap-3 text-on-surface">
            <span className="material-symbols-outlined text-secondary">person_pin</span>
            {t('Form.patient.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-2">{t('Form.patient.name')}</label>
              <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-body-md text-body-md focus:outline-hidden focus:border-secondary focus:ring-3 focus:ring-secondary/10 transition-all text-on-surface" placeholder="Johnathan Doe" type="text"/>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-2">{t('Form.patient.email')}</label>
              <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-body-md text-body-md focus:outline-hidden focus:border-secondary focus:ring-3 focus:ring-secondary/10 transition-all text-on-surface" placeholder="john.doe@example.com" type="email"/>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-2">{t('Form.patient.phone')}</label>
              <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-body-md text-body-md focus:outline-hidden focus:border-secondary focus:ring-3 focus:ring-secondary/10 transition-all text-on-surface" placeholder="+1 (555) 000-0000" type="tel"/>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-2">{t('Form.patient.insurance')}</label>
              <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-body-md text-body-md focus:outline-hidden focus:border-secondary focus:ring-3 focus:ring-secondary/10 transition-all text-on-surface" placeholder="e.g. BlueCross, Aetna" type="text"/>
            </div>
          </div>
        </section>

        {/* Step 4: Additional Notes */}
        <section>
          <h2 className="font-headline-sm text-lg md:text-headline-sm mb-6 flex items-center gap-3 text-on-surface">
            <span className="material-symbols-outlined text-secondary">description</span>
            {t('Form.notes.title')}
          </h2>
          <div>
            <textarea className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-body-md text-body-md focus:outline-hidden focus:border-secondary focus:ring-3 focus:ring-secondary/10 transition-all text-on-surface" placeholder={t('Form.notes.placeholder')} rows={4}></textarea>
          </div>
        </section>

        <div className="pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-end gap-4">
          <button className="w-full sm:w-auto px-8 py-3 rounded-full border border-outline text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all active:scale-95" type="button">{t('Form.buttons.save')}</button>
          <button className="w-full sm:w-auto px-12 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md clinical-shadow hover:opacity-90 transition-all active:scale-95" type="submit">{t('Form.buttons.confirm')}</button>
        </div>
      </form>
    </div>
  );
}
