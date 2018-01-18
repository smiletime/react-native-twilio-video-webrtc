/**
 * Component for Twilio Video participant views.
 *
 * Authors:
 *   Jonathan Chang <slycoder@gmail.com>
 */

import {
  requireNativeComponent,
  View
} from 'react-native'
import React from 'react'
import PropTypes from "prop-types";



class TwilioRemotePreview extends React.Component {


  render () {
    return (
      <NativeTwilioRemotePreview {...this.props} />
    )
  }
}

TwilioRemotePreview.propTypes = {
  trackId: PropTypes.string,
  testID: PropTypes.string,
  importantForAccessibility: PropTypes.string,
  renderToHardwareTextureAndroid:PropTypes.string,
  accessibilityLabel: PropTypes.string,
  onLayout:PropTypes.string,
  accessibilityLiveRegion:PropTypes.string,
  accessibilityComponentType: PropTypes.string,
  nativeID:PropTypes.string

}

const NativeTwilioRemotePreview = requireNativeComponent(
  'RNTwilioRemotePreview',
  TwilioRemotePreview
)

module.exports = TwilioRemotePreview
