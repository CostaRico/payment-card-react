import React from 'react';
import HeaderInner from '../../components/header-inner/heder-inner';
import Panel from '../../components/panel/panel';
import Select from '../../components/select/select';

export default class PageVisa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: 'Пополнение'
    }
  }

  render() {
    return (
        <div>
          <HeaderInner title={this.state.pageTitle} />
          <Panel title="VISA">
            <div className="form">
              <div className="form__row">
                <div className="form__item">
                  <div className="field-item">
                    <label className="field-item__label">Валюта:</label>
                    <Select>
                      <select>
                        <option>RUR</option>
                        <option>USD</option>
                      </select>
                    </Select>
                  </div>
                </div>
                <div className="form__item">
                  <div className="field-item">
                    <label className="field-item__label">Сумма</label>
                    <input type="text" className="field-input"/>
                  </div>
                </div>
              </div>
              <div className="form__row">
                <div className="form__item">
                  <div className="field-item">
                    <label className="field-item__label">Номер карты (без пробелов)</label>
                    <input type="text" className="field-input"/>
                  </div>
                </div>
              </div>
              <div className="form__row">
                <div className="form__item form__item--half">
                  <div className="field-item">
                    <label className="field-item__label">Имя (как на карте)</label>
                    <input type="text" className="field-input"/>
                  </div>
                </div>
                <div className="form__item form__item--half">
                  <div className="field-item">
                    <label className="field-item__label">Фамилия (как на карте)</label>
                    <input type="text" className="field-input"/>
                  </div>
                </div>
              </div>
              <div className="form__row">
                <div className="form__item form__item--half">
                  <div className="field-item">
                    <label className="field-item__label">Дата окончания</label>
                    <Select>
                      <select>
                        <option>06</option>
                        <option>07</option>
                      </select>
                    </Select>
                  </div>
                </div>
                <div className="form__item form__item--half">
                  <div className="field-item">
                    <Select>
                      <select>
                        <option>2020</option>
                        <option>2021</option>
                      </select>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="form__row">
                <div className="form__item form__item--half">
                  <div className="field-item">
                    <label className="field-item__label">CVV2 / Защитный код:</label>
                    <input type="text" className="field-input"/>
                  </div>
                </div>
                <div className="form__item form__item--half">
                  <div className="field-item">
                    <label className="field-item__label">Бонусный код:</label>
                    <input type="text" className="field-input"/>
                  </div>
                </div>
              </div>
              <div className="form__row">
                <div className="hint">
                  Ваш CVV2 - номер это три последнии цифры на обороте вашей карты.
                </div>
              </div>
              <div className="form__row">
                <div className="form__item">
                  <div className="resume"><span>Сумма депозита (RUR):</span> <span>3000</span></div>
                </div>
              </div>
              <div className="form__actions">
                <div className="btn btn--submit">
                  Подтвердить
                </div>
              </div>
            </div>
          </Panel>
          <Panel type="info" title="Условия пополнения">
            text
          </Panel>
        </div>
    )
  }
}
