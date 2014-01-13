/*!

          fn = function( elem, key, value ) {

      i = 0,
          markFunction(function( seed, matches ) {
      temp = condense( matcherOut, postMap );
    firingIndex,


          i = options.length;
        // when an event is called after a page has unloaded
    // Support: Chrome 23+, Safari?
        data = selector;

        (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
  toggle: function( state ) {
        style.removeAttribute( "filter" );
    processData: true,

        send: function( headers, complete ) {
      });
};
 * jQuery JavaScript Library v1.10.2
    // Trigger any bound ready events
            return bulk.call( jQuery( elem ), value );
  function cache( key, value ) {
      aup = a.parentNode,
            var idx,
      postFilter( temp, [], context, xml );
    // First callback to fire (used internally by add and fireWith)
  // Run tests that need a body at doc ready
  return true;

        return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
    // Target should not be a text node (#504, #13143)
        selector = undefined;
  before: function() {

    if ( typeof state === "boolean" ) {

    async: true,
      // Set data for the fake xhr object

    });

 * http://jquery.com/
    if ( jQuery.fn.trigger ) {
          };
    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
      bup = b.parentNode,
              matched = fn( seed, argument ),

    firingStart,
  jQuery(function() {
}
        while ( i-- ) {
          jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
    if ( event.target.nodeType === 3 ) {
      }
    return this.domManip( arguments, function( elem ) {
      // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
      return state ? this.show() : this.hide();
        // if there is no filter style applied in a css rule or unset inline opacity, we are done
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      jqXHR.status = status;
          // Get a new xhr
  }
jQuery.fx.speeds = {
 *
      jQuery( document ).trigger("ready").off("ready");
        }
    if ( keys.push( key += " " ) > Expr.cacheLength ) {
      ap = [ a ],
              i = matched.length;
      // Un-match failing elements by moving them back to matcherIn
    // Actual callback list
    var container, marginDiv, tds,
jQuery.extend({
          option = options[ i ];
          undefined;
      event.target = event.target.parentNode;
    }
      if ( this.parentNode ) {
      destElements = getAll( clone );
    }
        if ( value === "" || currentStyle && !currentStyle.filter ) {
    /*
      jqXHR.statusText = ( nativeStatusText || statusText ) + "";
          var handle, i,

  slow: 600,
 * Includes Sizzle.js
    }
      }
      // Only keep the most recent entries
      bp = [ b ];
            while ( i-- ) {
      i = temp.length;
    list = [],
      divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
  queue: function( elem, type, data ) {
          if ( (option.selected = jQuery.inArray( jQuery(option).val(), values ) >= 0) ) {
      };
    }
    if ( fn === false ) {
        this.parentNode.insertBefore( elem, this );
      srcElements = getAll( elem );

          return;
    timeout: 0,

            xhr = s.xhr();
  // height/width overflow pass
  fast: 200,
 * http://sizzlejs.com/
  },

      delete cache[ keys.shift() ];

              idx = indexOf.call( seed, matched[i] );
      while ( i-- ) {
    // Stack of fire calls for repeatable lists
      body = document.getElementsByTagName("body")[0];
    var queue;
            optionSet = true;
      // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events

      fn = returnFalse;
      }

    return this.each(function() {
        }
    data: null,
      // Success/Error

  if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
  // Default speed
 *

      if ( fn ) {
    }
    // Exit early if the nodes are identical
              seed[ idx ] = !( matches[ idx ] = matched[i] );
        if ( (elem = temp[i]) ) {
    stack = !options.once && [],


          }
      eventHandle.elem = elem;
    // Support: IE<9
    } else if ( !fn ) {
    });
      // Fix all IE cloning issues
      if ( isHidden( this ) ) {
      }
    dataType: null,
      if ( isSuccess ) {
          // Open the socket
    // Make sure that nothing sneaks out
  _default: 400
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
  // See test/unit/core.js for details concerning isFunction.
        for ( ; i < length; i++ ) {
    return (cache[ key ] = value);
    if ( a === b ) {
            }
          matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
    // Fire callbacks
    if ( !body ) {
    if ( elem ) {
        }
    }
    // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
      return this;
  },
      for ( i = 0; (node = srcElements[i]) != null; ++i ) {
        jQuery( this ).show();

    username: null,
        deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
          // Passing null username, generates a login popup on Opera (#2865)
    // Record all 3 overflow attributes because IE does not
};
 * Released under the MIT license
  // Since version 1.3, DOM methods and functions like alert
          fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
  }
      hasDuplicate = true;
          }) :
        }
    fire = function( data ) {
      // Return for frameset docs that don't have a body
      type = ( type || "fx" ) + "queue";


    event.metaKey = !!event.metaKey;
    }

        // Ensure that the destination node is not null; Fixes #9587
      } else {
      // otherwise, set new filter values
    password: null,
      } else {
          if ( s.username ) {
    // change the overflow attribute when overflowX and

 * http://jquery.org/license
  // aren't supported. They return false on IE (#2968).
        }
  return cache;
      return 0;
          function( elem ) {
      }
      memory = options.memory && data;
      return;
      queue = jQuery._data( elem, type );
        // force browsers to behave consistently when non-matching value is set
    // Handle multiple events separated by a space


  after: function() {
        if ( destElements[i] ) {
        jQuery( this ).hide();
      style.filter = ralpha.test( filter ) ?
    cache: null,
        deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
            xhr.open( s.type, s.url, s.async, s.username, s.password );
    // overflowY are set to the same value
// Back Compat <1.8 extension point
 *
  isFunction: function( obj ) {
      }
}

            return fn( elem, 0, args );
    }
      fired = true;
    }

        if ( !optionSet ) {
    types = ( types || "" ).match( core_rnotwhite ) || [""];
    return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
    if ( one === 1 ) {
    return this.domManip( arguments, function( elem ) {
          fixCloneNodeIssues( node, destElements[i] );
      }
        filter.replace( ralpha, opacity ) :
    throws: false,
      }
          } else {
    opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
jQuery.fx.step = {};
 * Date: 2013-07-03T13:48Z
    return jQuery.type(obj) === "function";
    }

    // Parentless nodes are either documents or disconnected
          };

      firingIndex = firingStart || 0;

      // Speed up dequeue by getting out quickly if this is just a lookup
          elem.selectedIndex = -1;
    t = types.length;
  },
      origFn = fn;
      if ( this.parentNode ) {
        }
    });
        filter + " " + opacity;
    traditional: false,

            xhr.open( s.type, s.url, s.async );


 */
  },

/**
    } else if ( !aup || !bup ) {
      }
    if ( seed ) {
      firingStart = 0;
    container = document.createElement("div");
      if ( data ) {
        }
    while ( t-- ) {

      fn = function( event ) {
        this.parentNode.insertBefore( elem, this.nextSibling );
      }
  }
    }
    headers: {},
      // Status-dependent callbacks
          }
    // Set display property to inline-block for height/width
if ( jQuery.expr && jQuery.expr.filters ) {
(function( window, undefined ) {

    return chainable ?
 * Mark a function for special use by Sizzle
      return a === doc ? -1 :

      if ( postFinder || preFilter ) {
      firingLength = list.length;
    container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
        if ( !queue || jQuery.isArray(data) ) {
        return values;
      tmp = rtypenamespace.exec( types[t] ) || [];
  // Includes some event props shared by KeyEvent and MouseEvent
        // Can use an empty set, since event contains the info
      }
    }
});
  };
    */
      jqXHR.statusCode( statusCode );

    // animations on inline elements that are having width/height animated
  jQuery.expr.filters.animated = function( elem ) {

  isArray: Array.isArray || function( obj ) {
      elems :
 * @param {Function} fn The function to mark
        b === doc ? 1 :
      return fn;
        if ( postFinder ) {
      firing = true;

          queue = jQuery._data( elem, type, jQuery.makeArray(data) );
      }
      type = origType = tmp[1];
  props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        jQuery().off( event );
    });


}

      statusCode = undefined;
          // Apply custom fields if provided
    if ( jQuery.css( elem, "display" ) === "inline" &&
    return jQuery.grep(jQuery.timers, function( fn ) {
// Can't do this because several apps including ASP.NET trace
    return jQuery.type(obj) === "array";

 */
        aup ? -1 :
    }
          // Get the final matcherOut by condensing this intermediate into postFinder contexts
      for ( ; list && firingIndex < firingLength; firingIndex++ ) {
    body.appendChild( container ).appendChild( div );
        } else {
    }
      namespaces = ( tmp[2] || "" ).split( "." ).sort();

        return origFn.apply( this, arguments );
  },
    // Copy the events from the original to the clone
jQuery.extend({

    accepts: {

          if ( s.xhrFields ) {
        jQuery.css( elem, "float" ) === "none" ) {
      return elem === fn.elem;
// the stack via arguments.caller.callee and Firefox dies if
  },
      // Gets
function markFunction( fn ) {
        bup ? 1 :
  },
          temp = [];
        if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {

          queue.push( data );
  },

  fixHooks: {},
      };

    if ( dataAndEvents ) {
  // Add in style property hooks for overriding the default
// These hooks cannot be added until DOM ready because the support test
      "*": allTypes,
      if ( fireGlobals ) {
            for ( i in s.xhrFields ) {

    }).length;
// you try to trace through "use strict" call chains. (#13335)

      bulk ?
  fn[ expando ] = true;
        sortInput ?

          i = matcherOut.length;
          memory = false; // To prevent further calls using add
    // Support: IE8
        }

      // There *must* be a type, no attaching namespace-only handlers

      // Use same guid so caller can remove using origFn
  // keepData is for internal use only--do not document
      if ( deepDataAndEvents ) {
  // behavior of getting and setting a style property
// for it is not run until after DOM ready
      text: "text/plain",
        globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
              xhr[ i ] = s.xhrFields[ i ];
      // inline-level elements accept inline-block;
  };
// Support: Firefox 18+
  isWindow: function( obj ) {
        fn.call( elems ) :
  return fn;
        ( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
  pseudos: {
          while ( i-- ) {
          break;
    // Check if table cells still have offsetWidth/Height when they are set
      }
  attr: function( elem, name, value ) {
      if ( !type ) {
  keyHooks: {
      fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
  remove: function( selector, keepData ) {
        srcElements = srcElements || getAll( elem );
  cssHooks: {
jQuery(function() {
      html: "text/html",
          [ jqXHR, s, isSuccess ? success : error ] );
            }
      // block-level elements need to be inline with layout
}
//"use strict";
    /* jshint eqeqeq: false */
        length ? fn( elems[0], key ) : emptyGet;
}
        0;
    // Potentially complex pseudos
            if ( (elem = matcherOut[i]) ) {
        }
    // to display:none and there are still other visible table cells in a
      return queue || [];
    var hooks, ret,
        continue;
    props: "char charCode key keyCode".split(" "),
    }
    var elem,
        destElements = destElements || getAll( clone );
    opacity: {
  if ( !jQuery.support.reliableMarginRight ) {
      xml: "application/xml, text/xml",
      }
          }
      if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
jQuery.fn.offset = function( options ) {
var
    return obj != null && obj == obj.window;
  },


    "not": markFunction(function( selector ) {
              // Restore matcherIn since elem is not yet a final match
      }
    // table row; if so, offsetWidth/Height are not reliable for use when
    }
      nType = elem.nodeType;
      }
    filter: function( event, original ) {
    return this.each( function() {
      elems = selector ? jQuery.filter( selector, this ) : this,

      get: function( elem, computed ) {
    jQuery.cssHooks.marginRight = {
      json: "application/json, text/javascript"


        style.display = "inline-block";
  if ( arguments.length ) {
  // The deferred used on DOM ready
  },

/**
    // If the nodes are siblings, we can do a quick check
      // Trim the selector passed to compile
              temp.push( (matcherIn[i] = elem) );
      firing = false;
    // determining if an element has been hidden directly using
  },



      jQuery.event.add( this, types, fn, data, selector );
      i = 0;
        for ( i = 0; (node = srcElements[i]) != null; i++ ) {
        if ( computed ) {
      get: function( elem, computed ) {
    },
      // Complete
          // Override mime type if needed

    return options === undefined ?
  readyList,

  now: function() {
 * Support testing using an element
    } else if ( aup === bup ) {
      // to avoid treating leading and trailing
            }
      if ( list ) {
    // display:none (it is still safe to use offsets if a parent element is

    // don't get/set attributes on text, comment and attribute nodes
      // If event changes its type, use the special event handlers for the changed type
      // Add which for key events
    });

          cloneCopyEvent( node, destElements[i] );
          // We should always get a number back from opacity
        if ( computed ) {

      completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
          if ( s.mimeType && xhr.overrideMimeType ) {
      } else {
      this :

  isNumeric: function( obj ) {
    return ( new Date() ).getTime();
 * @param {Function} fn Passed the created div and expects a boolean result
      return siblingCheck( a, b );
      // spaces as combinators
          }
        if ( stack ) {
    // hidden; don safety goggles and see bug #4512 for more information).
  dequeue: function( elem, type ) {
    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
      special = jQuery.event.special[ type ] || {};
      if ( event.which == null ) {
  },
    for ( ; (elem = elems[i]) != null; i++ ) {
        }
          var ret = curCSS( elem, "opacity" );
          // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
    contents: {

            xhr.overrideMimeType( s.mimeType );
        style.zoom = 1;
      this.each(function( i ) {
  // A central reference to the root jQuery(document)
    return !isNaN( parseFloat(obj) ) && isFinite( obj );
  },
 */
    }
      var input = [],
          postFinder( null, (matcherOut = []), temp, xml );
          if ( stack.length ) {
    div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
    type = type || "fx";
      return;

        event.which = original.charCode != null ? original.charCode : original.keyCode;
  one: function( types, selector, data, fn ) {

      } else {
          return ret === "" ? "1" : ret;
          // Work around by temporarily setting element display to inline-block
      xml: /xml/,
      if ( fireGlobals ) {
          }
      }
        jQuery.offset.setOffset( this, options, i );
  rootjQuery,
  },

function assert( fn ) {

        results = [],
        }
            fire( stack.shift() );
    tds = div.getElementsByTagName("td");

    }
      // If selector defined, determine special event api type, otherwise given type
      }
    return this.on( types, selector, data, fn, 1 );
      if ( !keepData && elem.nodeType === 1 ) {
        cloneCopyEvent( elem, clone );
        }
          return jQuery.swap( elem, { "display": "inline-block" },
      html: /html/,
        globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

    }
      });


  // A method for quickly swapping in/out CSS properties to get correct calculations.
  var div = document.createElement("div");
    // Otherwise we need full lists of their ancestors for comparison
        matcher = compile( selector.replace( rtrim, "$1" ) );

          }
    tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
    var queue = jQuery.queue( elem, type ),

      type = ( selector ? special.delegateType : special.bindType ) || type;

  },
        jQuery.cleanData( getAll( elem ) );
      }
      }
            curCSS, [ elem, "marginRight" ] );
      json: /json/
        // Handle the global AJAX counter
          // X-Requested-With header
  }
  }
  // Support: IE<10
  type: function( obj ) {
  // Note: this method belongs to the css module but it's needed here for the support module.

    cur = a;

        // Move matched elements from seed to results to keep them synchronized
        } else if ( memory ) {
    isSupported = ( tds[ 0 ].offsetHeight === 0 );
      startLength = queue.length,
    // Fallback to prop when attributes are not supported

      return event;
  off: function( types, selector, fn ) {
      }
    }
    }
        }
    },
        if ( !( --jQuery.active ) ) {
          // For cross-domain requests, seeing as conditions for a preflight are


  // For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
    if ( obj == null ) {
  // If support gets modularized, this method should be moved back to the css module.
  try {
    while ( (cur = cur.parentNode) ) {
      return matcher[ expando ] ?
        i = matcherOut.length;
          list = [];

      fn = queue.shift(),
    if ( typeof elem.getAttribute === core_strundefined ) {
      // Update special based on newly reset type
    }
    var handleObj, type;


  },
      }

          jQuery.event.trigger("ajaxStop");
          // akin to a jigsaw puzzle, we simply never set it to be sure.
  if ( opts.overflow ) {
  var docElem, win,
  core_strundefined = typeof undefined,
      return String( obj );
  swap: function( elem, options, callback, args ) {
    return !!fn( div );
      ap.unshift( cur );
        markFunction(function( seed, matches, context, xml ) {
        while ( i-- ) {
        } else {
    tds[ 0 ].style.display = "";
      hooks = jQuery._queueHooks( elem, type ),
      return jQuery.prop( elem, name, value );
      special = jQuery.event.special[ type ] || {};
  },
    if ( types && types.preventDefault && types.handleObj ) {
      if ( elem.parentNode ) {
    // Preserve script evaluation history

    };
    responseFields: {
        }
          // (it can always be set on a per-request basis or even using ajaxSetup)
    style.overflow = "hidden";
    box = { top: 0, left: 0 },

    }
    var ret, name,
  } catch (e) {
    }
          var elem,
          if ( (elem = matcherOut[i]) &&
          self.disable();
    tds[ 1 ].style.display = "none";
      next = function() {
    }


      // ( event )  dispatched jQuery.Event
        if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
    destElements = getAll( clone, "script" );
  // Don't automatically add "px" to these possibly-unitless properties
  }
      xml: "responseXML",
      }
          // For same-domain requests, won't change header if already provided.
    if ( !jQuery.support.shrinkWrapBlocks ) {
    elem = this[ 0 ],
  // Use the correct document accordingly with window argument (sandbox)
    return typeof obj === "object" || typeof obj === "function" ?
      old = {};
    return false;
    cur = b;
            unmatched = matcher( seed, null, xml, [] ),
            (temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {
        }

        jQuery.dequeue( elem, type );

      // handleObj is passed to all event handlers
  mouseHooks: {
      handleObj = types.handleObj;
          setGlobalEval( getAll( elem, "script" ) );
    if ( destElements.length > 0 ) {
  cssNumber: {

      text: "responseText",
    }
          if ( !s.crossDomain && !headers["X-Requested-With"] ) {
      anim.always(function() {
    doc = elem && elem.ownerDocument;
  location = window.location,
      class2type[ core_toString.call(obj) ] || "object" :

  } finally {
    while ( (cur = cur.parentNode) ) {
            i = seed.length;

      }
    // Support: IE8
      };
    // All attributes are lowercase
      handleObj = jQuery.extend({
    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      jQuery( types.delegateTarget ).off(
        }
      setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
    "columnCount": true,
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
      json: "responseJSON"

            headers["X-Requested-With"] = "XMLHttpRequest";
        style.overflow = opts.overflow[ 0 ];

  document = window.document,
      typeof obj;
    // Remember the old values, and insert the new ones
    // Remove from its parent by default
      bp.unshift( cur );

            seed[temp] = !(results[temp] = elem);
    },
    // Check if empty table cells still have offsetWidth/Height

    // Grab necessary hook if one is defined
        type: type,
    filter: function( event, original ) {
        handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
        elem.parentNode.removeChild( elem );
    }
    "fillOpacity": true,
  // getComputedStyle returns percent when specified for top/left/bottom/right
    },
    return jqXHR;
          }
        style.overflowX = opts.overflow[ 1 ];
  if ( !doc ) {
  docElem = document.documentElement,
  },
    for ( name in options ) {
    if ( div.parentNode ) {
    }
          // Match elements unmatched by `matcher`
          }
    // Actual Callbacks object
    support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );
    // If the fx queue is dequeued, always remove the progress sentinel
    if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
        origType: origType,
      var body, eventDoc, doc,
        handleObj.selector,
      }

    "fontWeight": true,
  // rather than make the css module depend on the offset module, we just check for it here

  },

        style.overflowY = opts.overflow[ 2 ];
    return;


      old[ name ] = elem.style[ name ];
      div.parentNode.removeChild( div );

          while ( i-- ) {
        }
    self = {

    if ( fn === "inprogress" ) {
      name = name.toLowerCase();
        data: data,
        button = original.button,
        handleObj.handler
    }
    destElements = srcElements = node = null;
    "lineHeight": true,
  if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
    // Data converters

          // Need an extra try/catch for cross domain requests in Firefox 3
      });
  }
  // Map over jQuery in case of overwrite
  isPlainObject: function( obj ) {
      elem.style[ name ] = options[ name ];
    }
    // Walk down the tree looking for a discrepancy
            if ( (elem = unmatched[i]) ) {
      }
      // Add a callback or a collection of callbacks to the list
    // Check box-sizing and margin behavior.
      fn = queue.shift();
      hooks = jQuery.attrHooks[ name ] ||
        handler: handler,
        fromElement = original.fromElement;
      );


    "opacity": true,
    jQuery.each( [ "top", "left" ], function( i, prop ) {
    // Keys separate source (or catchall "*") and destination types with a single space
  getJSON: function( url, data, callback ) {
          try {
    }

  _jQuery = window.jQuery,
    var key;
    }
    // release memory in IE
    while ( ap[i] === bp[i] ) {
              seed[i] = !(matches[i] = elem);

      add: function() {
    div.innerHTML = "";
      startLength--;
        ( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
        guid: handler.guid,

      return this;
    return this;
    // Return the cloned set
    "order": true,
      jQuery.cssHooks[ prop ] = {
    converters: {
    return jQuery.get( url, data, callback, "json" );
            for ( i in headers ) {
  }
  docElem = doc.documentElement;



    div = null;
      i++;
            }
    // Add elements to results, through postFinder if defined
        if ( list ) {
    div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
    }
    }
        selector: selector,
      // Calculate pageX/Y if missing and clientX/Y available
    }
  },
    return clone;
    "orphans": true,
        get: function( elem, computed ) {

  },
              xhr.setRequestHeader( i, headers[ i ] );


  // Map over the $ in case of overwrite
    // Must be an Object.
    ret = callback.apply( elem, args || [] );
  }
    }
          }
    } else {
          // First, we save the current length



        needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
      if ( event.pageX == null && original.clientX != null ) {
    if ( typeof types === "object" ) {

  },
    "widows": true,
          if ( computed ) {
      // Convert anything to text

            }

  // Make sure it's not a disconnected DOM node
  _$ = window.$,
    // Because of IE, we also have to check the presence of the constructor property.

}

        }) :
      matcherOut = condense(
          var start = list.length;
    // Workaround failing boxSizing test due to offsetWidth returning wrong value
    if ( fn ) {
    if ( value !== undefined ) {
        namespace: namespaces.join(".")
        eventDoc = event.target.ownerDocument || document;
      // ( types-object [, selector] )
  empty: function() {

    "zIndex": true,
            computed = curCSS( elem, prop );
      "* text": String,
  getScript: function( url, callback ) {
          } catch( err ) {}
  // show/hide pass
  if ( !jQuery.contains( docElem, elem ) ) {

    // Make sure that DOM nodes and window objects don't pass through, as well
    // Revert the old values

    return i ?
        function( elem, context, xml ) {
        matcherOut === results ?
          (function add( args ) {
    // with some non-1 values of body zoom, ticket #13543


      }, handleObjIn );
        doc = eventDoc.documentElement;
      for ( type in types ) {
    var elem,
  buildFragment: function( elems, context, scripts, selection ) {
    "zoom": true
            // if curCSS returns percentage, fallback to offset

    return jQuery.get( url, undefined, callback, "script" );

  for ( prop in props ) {
    return box;
  // [[Class]] -> type pairs
    if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
    for ( name in options ) {
/**
      // Do a sibling check if the nodes have a common ancestor
          input[0] = elem;
          matcherOut.splice( preexisting, matcherOut.length ) :
            jQuery.each( args, function( _, arg ) {
    jQuery.swap( body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
      // Add a progress sentinel to prevent the fx queue from being
      if ( value === null ) {

        body = eventDoc.body;
        this.off( type, selector, types[ type ] );
      i = 0;
    var j, elem, contains,
  },
            return rnumnonpx.test( computed ) ?
      // Text to html (true = no transformation)
  }
          // Do send the request
    value = props[ prop ];
  }
  class2type = {},
      return false;
      elem.style[ name ] = old[ name ];
 * Adds the same handler for all of the specified attrs
      siblingCheck( ap[i], bp[i] ) :
          matcher( input, null, xml, results );
          matcherOut
              var type = jQuery.type( arg );
      support.boxSizing = div.offsetWidth === 4;
      // automatically dequeued
        jQuery.removeAttr( elem, name );
      // Init the event handler queue if we're the first

      }

      tmp, tag, tbody, wrap,

              jQuery( elem ).position()[ prop ] + "px" :
      "text html": true,
});
          // This may raise an exception which is actually
    if ( rfxtypes.exec( value ) ) {


    }
    }
 * @param {String} attrs Pipe-separated list of attributes

          return !results.pop();
      );
              if ( type === "function" ) {
    });
      if ( type === "fx" ) {

      if ( !(handlers = events[ type ]) ) {
        event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
      return this;
    for ( ; (elem = this[i]) != null; i++ ) {
      l = elems.length,
  // Add in properties whose names you wish to fix before
              computed;


          // handled in jQuery.ajax (so no try/catch here)
      delete props[ prop ];
  // If we don't have gBCR, just use 0,0 rather than error
  // List of deleted data cache ids, so we can reuse them


 * @param {Function} handler The method that will be applied
      // Otherwise nodes in our document sort first
        };
      if ( postFinder ) {
                if ( !options.unique || !self.has( arg ) ) {

        queue.unshift( "inprogress" );
      } else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
        handlers = events[ type ] = [];
        event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
      // Remove element nodes and prevent memory leaks

  // setting or getting the value
          }
      // Evaluate text as a json expression
jQuery.each( [ "get", "post" ], function( i, method ) {
          xhr.send( ( s.hasContent && s.data ) || null );
      toggle = toggle || value === "toggle";
  // BlackBerry 5, iOS 3 (original iPhone)
  core_deletedIds = [],
    try {
    return ret;
 */
      ap[i] === preferredDoc ? -1 :
    }),
        postFinder( null, results, matcherOut, xml );
                  list.push( arg );
    // Use window.getComputedStyle because jsdom on node.js will break without it.
      }
        return ret;
        handlers.delegateCount = 0;
      }
    if ( selector === false || typeof selector === "function" ) {
      if ( elem.nodeType === 1 ) {
      // Ensure a safe fragment
  cssProps: {
        }
      "text json": jQuery.parseJSON,
  jQuery[ method ] = function( url, data, callback, type ) {

      if ( value === ( hidden ? "hide" : "show" ) ) {
  if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
