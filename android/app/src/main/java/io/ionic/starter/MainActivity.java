package io.ionic.starter;

import com.getcapacitor.BridgeActivity;

 public class MainActivity extends BridgeActivity {
     @Override
     public void onCreate(Bundle savedInstanceState) {
         registerPlugin(com.getcapacitor.community.stripe.StripePlugin.class);
         super.onCreate(savedInstanceState);
     }
 }
